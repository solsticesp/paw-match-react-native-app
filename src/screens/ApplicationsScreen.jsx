import { useState, useCallback } from "react";
import {
    View,
    Text,
    Pressable,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

import { applicationsApi } from "../api";
import { useUserContext } from "../contexts/user/UserContext";

import styles from "../styles/ApplicationsScreen.styles";
import ApplicationCard from "../components/ApplicationCard";

export default function ApplicationsScreen({ navigation }) {
    const { user } = useUserContext();

    const [activeTab, setActiveTab] = useState("sent");
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadApplications = useCallback(async () => {
        if (!user?.id) return;

        try {
            setIsLoading(true);

            const data =
                activeTab === "sent"
                    ? await applicationsApi.getSentApplications(user.id)
                    : await applicationsApi.getReceivedApplications(user.id);

            const formattedApplications = data.map((item) => ({
                id: item.id,

                petId: item.pets?.id,
                petName: item.pets?.name,
                petImage: item.pets?.image_url,
                petAge: item.pets?.age,
                petSpecies: item.pets?.categories?.name,

                applicantName: item.full_name,
                email: item.email,
                phone: item.phone,
                message: item.message,

                status: item.status,

                date: new Date(item.created_at).toLocaleDateString(),
            }));

            setApplications(formattedApplications);

        } catch (error) {
            console.log(
                "Load applications error:",
                error.response?.data || error.message
            );

            Alert.alert(
                "Error",
                "Could not load applications. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    }, [activeTab, user?.id]);

    useFocusEffect(
        useCallback(() => {
            loadApplications();
        }, [loadApplications])
    );

    return (
        <SafeAreaView
            style={styles.container}
            edges={["top", "bottom"]}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        My Applications
                    </Text>
                </View>

                <View style={styles.tabContainer}>
                    <Pressable
                        style={[
                            styles.tab,
                            activeTab === "sent" && styles.activeTab,
                        ]}
                        onPress={() => setActiveTab("sent")}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === "sent" && styles.activeTabText,
                            ]}
                        >
                            Sent
                        </Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.tab,
                            activeTab === "received" && styles.activeTab,
                        ]}
                        onPress={() => setActiveTab("received")}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === "received" && styles.activeTabText,
                            ]}
                        >
                            Received
                        </Text>
                    </Pressable>
                </View>

                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#58745A" />
                    </View>
                ) : (
                    <FlatList
                        data={applications}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ApplicationCard
                                application={item}
                                type={activeTab}
                                onPress={() =>
                                    navigation.getParent().navigate(
                                        "ApplicationDetails",
                                        {
                                            application: item,
                                            type: activeTab,
                                        }
                                    )
                                }
                            />
                        )}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={
                            <Text style={styles.emptyText}>
                                {activeTab === "sent"
                                    ? "You haven't sent any applications yet."
                                    : "You haven't received any applications yet."}
                            </Text>
                        }
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
