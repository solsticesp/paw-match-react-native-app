import { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
    SENT_APPLICATIONS,
    RECEIVED_APPLICATIONS,
} from "../data/applications";

import styles from "../styles/ApplicationsScreen.styles";
import ApplicationCard from "../components/ApplicationCard";

export default function ApplicationsScreen({
    navigation,
}) {
    const [activeTab, setActiveTab] = useState("sent");

    const applications =
        activeTab === "sent"
            ? SENT_APPLICATIONS
            : RECEIVED_APPLICATIONS;


    return (

        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        My Application
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

                <FlatList
                    data={applications}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ApplicationCard
                            application={item}
                            type={activeTab}
                            onPress={() =>
                                navigation.getParent().navigate("ApplicationDetails", {
                                    application: item,
                                    type: activeTab,
                                })
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
            </View>
        </SafeAreaView>
    );
}