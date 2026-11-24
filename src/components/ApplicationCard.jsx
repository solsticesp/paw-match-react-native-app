
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../styles/theme";

export default function ApplicationCard({
    application,
    type,
    onPress,
}) {
    const isSent = type === "sent";

    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
        >
            <View style={styles.topRow}>
                <Image
                    source={{ uri: application.petImage }}
                    style={styles.petImage}
                />

                <View style={styles.petInfo}>
                    <Text style={styles.petName}>
                        {application.petName}
                    </Text>

                    <Text style={styles.petMeta}>
                        {application.petAge} {application.petAge === 1 ? "year" : "years"} • {application.petSpecies}
                    </Text>
                </View>

                <View style={[
                    styles.statusBadge,
                    application.status === "Approved" && styles.approved,
                    application.status === "Rejected" && styles.rejected,
                ]}>
                    <Text style={styles.statusText}>
                        {application.status}
                    </Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomRow}>
                <View>
                    <Text style={styles.label}>
                        {isSent ? "Application sent to" : "Applicant"}
                    </Text>

                    <Text style={styles.applicantName}>
                        {isSent ? "Pet Owner" : application.applicantName}
                    </Text>

                    <Text style={styles.date}>
                        {application.date}
                    </Text>
                </View>

                <View style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>
                        View Details
                    </Text>
                    <Ionicons
                        name="chevron-forward"
                        size={16}
                        color="#58745A"
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: spacing.md,
        marginBottom: 14,
    },

    topRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    petImage: {
        width: 62,
        height: 62,
        borderRadius: radius.md,
        backgroundColor: colors.primaryLight,
    },

    petInfo: {
        flex: 1,
        marginLeft: 12,
    },

    petName: {
        fontSize: 16,
        fontWeight: "800",
        color: colors.text,
    },

    petMeta: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 5,
    },

    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: radius.pill,
        backgroundColor: "#F5E9CC",
    },

    approved: {
        backgroundColor: "#DDEBDD",
    },

    rejected: {
        backgroundColor: "#F5DDDA",
    },

    statusText: {
        fontSize: 11,
        fontWeight: "700",
        color: colors.text,
    },

    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 14,
    },

    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    label: {
        fontSize: 11,
        color: colors.textMuted,
    },

    applicantName: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.text,
        marginTop: 3,
    },

    date: {
        fontSize: 11,
        color: colors.textMuted,
        marginTop: 4,
    },

    viewButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    viewButtonText: {
        color: colors.primaryDark,
        fontSize: 12,
        fontWeight: "700",
    },
});
