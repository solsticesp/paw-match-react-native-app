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
        marginBottom: 28,
    },
    backButton: {
        marginRight: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: colors.text,
    },
    petSummary: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface,
        padding: 10,
        borderRadius: radius.md,
        marginBottom: 22,
    },
    petImage: {
        width: 124,
        height: 124,
        borderRadius: radius.sm,
        backgroundColor: colors.primaryLight,
    },
    petName: {
        fontWeight: "800",
        fontSize: 24,
        color: colors.text,
        marginLeft: 18,
    },
    petMeta: {
        fontSize: 15,
        color: colors.textMuted,
        marginLeft: 18,
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "800",
        color: colors.text,
        marginBottom: 12,
    },
    inputGroup: {
        marginBottom: 14,
        gap: 10,
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.text,
        marginBottom: 7,
    },
    input: {
        minHeight: 68,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        backgroundColor: colors.surface,
        paddingHorizontal: 14,
        color: colors.text,
    },
    messageInput: {
        height: 120,
        paddingTop: 15,
    },
    textArea: {
        minHeight: 100,
        paddingTop: 12,
        textAlignVertical: "top",
    },
    submitButton: {
        minHeight: 54,
        borderRadius: radius.md,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
    },
    submitButtonText: {
        color: colors.surface,
        fontWeight: "700",
        fontSize: 15,
    },
});