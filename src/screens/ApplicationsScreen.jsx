import { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/ApplicationsScreen.styles";

export default function ApplicationsScreen() {
    const [activeTab, setActiveTab] = useState("sent");

    // Example data
    const sentApplications = [];
    const receivedApplications = [];

    const applications =
        activeTab === "sent"
            ? sentApplications
            : receivedApplications;

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
                        <View style={styles.applicationCard}>
                            {/* Your existing application card content */}
                        </View>
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