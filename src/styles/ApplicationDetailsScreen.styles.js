
import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        padding: spacing.md,
        paddingBottom: spacing.xl,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: spacing.lg,
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: radius.md,
        backgroundColor: colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.text,
    },

    headerPlaceholder: {
        width: 40,
    },

    petCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: spacing.md,
        marginBottom: spacing.lg,
    },

    petImage: {
        width: 100,
        height: 100,
        borderRadius: radius.md,
        backgroundColor: colors.primaryLight,
    },

    petInfo: {
        flex: 1,
        marginLeft: spacing.md,
        gap: 7,
    },

    petName: {
        fontSize: 20,
        fontWeight: "800",
        color: colors.text,
    },

    petMeta: {
        fontSize: 13,
        color: colors.textMuted,
    },

    statusBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#F5E9CC",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: radius.pill,
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

    section: {
        backgroundColor: colors.surface,
        padding: spacing.md,
        borderRadius: radius.md,
        marginBottom: spacing.md,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.text,
        marginBottom: spacing.md,
    },

    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: spacing.md,
    },

    infoLabel: {
        fontSize: 11,
        color: colors.textMuted,
        marginBottom: 3,
    },

    infoValue: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.text,
    },

    messageBox: {
        backgroundColor: colors.background,
        padding: spacing.md,
        borderRadius: radius.md,
    },

    messageText: {
        fontSize: 13,
        lineHeight: 21,
        color: colors.text,
    },

    actions: {
        gap: spacing.sm,
        marginTop: spacing.sm,
    },

    acceptButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: radius.md,
        alignItems: "center",
    },

    acceptButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
    },

    declineButton: {
        backgroundColor: "#F5DDDA",
        paddingVertical: 15,
        borderRadius: radius.md,
        alignItems: "center",
    },

    declineButtonText: {
        color: "#873F37",
        fontSize: 14,
        fontWeight: "700",
    },
});
