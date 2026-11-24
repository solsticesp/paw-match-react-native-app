import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
    },
    backButton: {
        position: "absolute",
        top: 58,
        left: spacing.lg,
    },
    header: {
        alignItems: "center",
        marginBottom: 34,
    },
    logoMark: {
        color: colors.primary,
    },
    logo: {
        fontSize: 37,
        fontWeight: "800",
        color: colors.primaryDark,
        marginTop: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: colors.text,
        marginTop: 56,
    },
    subtitle: {
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 8,
    },
    form: {
        gap: 14,
    },
    input: {
        minHeight: 52,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        paddingHorizontal: 16,
        fontSize: 15,
        color: colors.text,
    },
    primaryButton: {
        minHeight: 54,
        borderRadius: radius.md,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
    },
    primaryButtonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: "700",
    },
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginVertical: 18,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
    },
    dividerText: {
        color: colors.textMuted,
        fontSize: 13,
    },
    socialButton: {
        minHeight: 50,
        borderRadius: radius.pill,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    socialButtonText: {
        color: colors.text,
        fontWeight: "600",
    },
    footer: {
        alignItems: "center",
        textAlign: "center",
        color: colors.textMuted,
        marginTop: 28,
    },
    link: {
        color: colors.primaryDark,
        fontWeight: "700",
    },
});