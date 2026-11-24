import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: spacing.md,
        paddingBottom: 28,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 28,
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        color: colors.text,
        marginBottom: 18,
    },
    applicationCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },
    petImage: {
        width: 70,
        height: 70,
        borderRadius: radius.sm,
        backgroundColor: colors.primaryLight,
    },
    details: {
        flex: 1,
        marginLeft: 12,
    },
    petName: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.text,
    },
    submitted: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 5,
    },
    status: {
        borderRadius: radius.pill,
        paddingHorizontal: 10,
        paddingVertical: 6,
        overflow: "hidden",
        fontSize: 11,
        fontWeight: "700",
        color: colors.primaryDark,
        backgroundColor: colors.warning,
    },
    statusApproved: {
        backgroundColor: colors.success,
    },
    statusRejected: {
        backgroundColor: "#F8DEDA",
        color: colors.danger,
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: 4,
        marginBottom: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
    },

    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.sm,
    },

    activeTab: {
        backgroundColor: colors.primary,
    },

    tabText: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.textMuted,
    },

    activeTabText: {
        color: colors.surface,
    },

    listContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },

    emptyText: {
        textAlign: "center",
        color: colors.textMuted,
        marginTop: 35,
        fontSize: 14,
    },
});