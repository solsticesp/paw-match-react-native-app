
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
});
