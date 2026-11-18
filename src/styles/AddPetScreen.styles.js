
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
        marginBottom: spacing.sm,
    },
    backButton: {
        marginRight: spacing.md,
    },
    title: {
        fontSize: 22,
        fontWeight: "800",
        color: colors.text,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textMuted,
        marginBottom: spacing.lg,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "800",
        color: colors.text,
        marginBottom: spacing.md,
        marginTop: spacing.sm,
    },
    imageUpload: {
        height: 150,
        backgroundColor: colors.primaryLight,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: spacing.lg,
    },
    uploadTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.primaryDark,
        marginTop: spacing.sm,
    },
    uploadSubtitle: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    inputGroup: {
        marginBottom: spacing.md,
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.text,
        marginBottom: spacing.sm,
    },
    input: {
        minHeight: 48,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        backgroundColor: colors.surface,
        paddingHorizontal: 14,
        color: colors.text,
        fontSize: 14,
    },
    row: {
        flexDirection: "row",
        gap: spacing.md,
        marginBottom: spacing.md,
    },
    halfInput: {
        flex: 1,
    },
    optionRow: {
        flexDirection: "row",
        gap: spacing.xs,
        flexWrap: "wrap",
    },
    optionChip: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.pill,
        paddingHorizontal: 14,
        paddingVertical: 11,
    },
    optionText: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.textMuted,
    },
    selectedOptionChip: {
        backgroundColor: colors.primary,
        borderColor: colors.primaryDark,
    },
    selectedOptionText: {
        color: colors.surface,
    },
    textArea: {
        minHeight: 120,
        paddingTop: 14,
    },
    submitButton: {
        minHeight: 54,
        backgroundColor: colors.primary,
        borderRadius: radius.pill,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.sm,
        marginTop: spacing.md,
    },
    submitButtonText: {
        color: colors.surface,
        fontWeight: "700",
        fontSize: 15,
    },
});
