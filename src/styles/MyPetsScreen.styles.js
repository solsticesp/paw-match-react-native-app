
import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: spacing.md,
        paddingBottom: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: spacing.sm,
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        color: colors.text,
    },
    subtitle: {
        fontSize: 13,
        color: colors.textMuted,
        marginBottom: spacing.lg,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: radius.pill,
        gap: spacing.xs,
    },
    addButtonText: {
        color: colors.surface,
        fontSize: 13,
        fontWeight: "700",
    },
    petList: {
        gap: spacing.md,
    },
    petCard: {
        flexDirection: "row",
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.sm,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: "hidden",
    },
    petImage: {
        width: 112,
        height: 140,
        borderRadius: radius.md,
        backgroundColor: colors.primaryLight,
    },
    petInfo: {
        flex: 1,
        paddingLeft: spacing.md,
        paddingVertical: spacing.xs,
        justifyContent: "space-between",
    },
    petHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: spacing.xs,
    },
    petName: {
        fontSize: 17,
        fontWeight: "800",
        color: colors.text,
    },
    statusBadge: {
        backgroundColor: colors.success,
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: radius.pill,
    },
    statusText: {
        fontSize: 10,
        fontWeight: "700",
        color: colors.primaryDark,
    },
    petMeta: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    petBreed: {
        fontSize: 12,
        color: colors.text,
        fontWeight: "600",
        marginTop: spacing.xs,
    },
    cardActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: spacing.sm,
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs,
        backgroundColor: colors.primaryLight,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: radius.pill,
    },
    editButtonText: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.primaryDark,
    },
    deleteButton: {
        width: 38,
        height: 38,
        borderRadius: radius.md,
        backgroundColor: "#FCEBE9",
        alignItems: "center",
        justifyContent: "center",
    },
});
