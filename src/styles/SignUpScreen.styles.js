import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.lg,
        justifyContent: "center",
    },
    backButton: {
        position: "absolute",
        top: 58,
        left: spacing.lg,
    },
    header: {
        alignItems: "center",
        marginBottom: 30,
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
        marginTop: 24,
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
    footer: {
        alignItems: "center",
        textAlign: "center",
        color: colors.textMuted,
        marginTop: 24,
    },
    link: {
        color: colors.primaryDark,
        fontWeight: "700",
    },
});