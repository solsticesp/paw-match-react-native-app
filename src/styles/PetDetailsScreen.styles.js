import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    heroImage: {
        width: "100%",
        height: 360,
        backgroundColor: colors.primaryLight,
    },
    imageControls: {
        position: "absolute",
        top: 12,
        left: spacing.sm,
        right: spacing.sm,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    roundButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        marginTop: -22,
        backgroundColor: colors.background,
        borderTopLeftRadius: radius.lg,
        borderTopRightRadius: radius.lg,
        padding: spacing.lg,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    petName: {
        fontSize: 27,
        fontWeight: "800",
        color: colors.text,
    },
    availability: {
        backgroundColor: colors.success,
        borderRadius: radius.pill,
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: colors.primaryDark,
        fontWeight: "700",
        fontSize: 12,
    },
    metaRow: {
        flexDirection: "row",
        gap: 18,
        marginTop: 12,
        marginBottom: 24,
    },
    metaText: {
        color: colors.textMuted,
        fontSize: 13,
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "800",
        marginBottom: 8,
    },
    description: {
        color: colors.textMuted,
        fontSize: 14,
        lineHeight: 22,
    },
    bottomAction: {
        padding: spacing.md,
        backgroundColor: colors.background,
    },
    primaryButton: {
        minHeight: 54,
        borderRadius: radius.pill,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    primaryButtonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: "700",
    },
});