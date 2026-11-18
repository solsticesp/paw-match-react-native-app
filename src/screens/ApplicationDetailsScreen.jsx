import {
    View,
    Text,
    Image,
    Pressable,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/ApplicationDetailsScreen.styles";

export default function ApplicationDetailsScreen({ navigation, route }) {
    const { application, type } = route.params;

    const isReceived = type === "received";

    const isPending = application.status === "Pending";

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <View style={styles.header}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={22}
                            color="#333333"
                        />
                    </Pressable>

                    <Text style={styles.headerTitle}>
                        Application Details
                    </Text>

                    <View style={styles.headerPlaceholder} />
                </View>

                <View style={styles.petCard}>
                    <Image
                        source={{ uri: application.petImage }}
                        style={styles.petImage}
                    />

                    <View style={styles.petInfo}>
                        <Text style={styles.petName}>
                            {application.petName}
                        </Text>

                        <Text style={styles.petMeta}>
                            {application.petAge}{" "}
                            {application.petAge === 1 ? "year" : "years"}
                            {" • "}
                            {application.petSpecies}
                        </Text>

                        <View
                            style={[
                                styles.statusBadge,
                                application.status === "Approved" && styles.approved,
                                application.status === "Rejected" && styles.rejected,
                            ]}
                        >
                            <Text style={styles.statusText}>
                                {application.status}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Application Information
                    </Text>

                    <View style={styles.infoRow}>
                        <Ionicons
                            name="calendar-outline"
                            size={19}
                            color="#58745A"
                        />

                        <View>
                            <Text style={styles.infoLabel}>
                                Application date
                            </Text>
                            <Text style={styles.infoValue}>
                                {application.date}
                            </Text>
                        </View>
                    </View>
                </View>

                {isReceived && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Applicant Information
                        </Text>

                        <View style={styles.infoRow}>
                            <Ionicons
                                name="person-outline"
                                size={19}
                                color="#58745A"
                            />

                            <View>
                                <Text style={styles.infoLabel}>
                                    Full name
                                </Text>
                                <Text style={styles.infoValue}>
                                    {application.applicantName}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <Ionicons
                                name="mail-outline"
                                size={19}
                                color="#58745A"
                            />

                            <View>
                                <Text style={styles.infoLabel}>
                                    Email
                                </Text>
                                <Text style={styles.infoValue}>
                                    {application.email}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                            <Ionicons
                                name="call-outline"
                                size={19}
                                color="#58745A"
                            />

                            <View>
                                <Text style={styles.infoLabel}>
                                    Phone
                                </Text>
                                <Text style={styles.infoValue}>
                                    {application.phone}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {isReceived ? "Applicant's Message" : "Your Message"}
                    </Text>

                    <View style={styles.messageBox}>
                        <Text style={styles.messageText}>
                            {application.message || "No message provided."}
                        </Text>
                    </View>
                </View>

                {!isReceived && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Sent To
                        </Text>

                        <View style={styles.infoRow}>
                            <Ionicons
                                name="person-outline"
                                size={19}
                                color="#58745A"
                            />

                            <View>
                                <Text style={styles.infoValue}>
                                    {application.ownerName || "Pet Owner"}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}

                {isReceived && isPending && (
                    <View style={styles.actions}>
                        <Pressable style={styles.acceptButton}>
                            <Text style={styles.acceptButtonText}>
                                Accept Application
                            </Text>
                        </Pressable>

                        <Pressable style={styles.declineButton}>
                            <Text style={styles.declineButtonText}>
                                Decline Application
                            </Text>
                        </Pressable>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
