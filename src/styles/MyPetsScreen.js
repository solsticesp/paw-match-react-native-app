import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: spacing.md,
        flexGrow: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        color: colors.text,
        marginBottom: 18,
        textAlign: "center",
    },
    petCard: {
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
        width: 92,
        height: 92,
        borderRadius: radius.sm,
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
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 5,
    },
    heartButton: {
        padding: 8,
    },
    emptyState: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    emptyIcon: {
        fontSize: 58,
        color: colors.primary,
    },
    emptyTitle: {
        fontSize: 19,
        fontWeight: "800",
        color: colors.text,
        marginTop: 14,
    },
    emptyText: {
        color: colors.textMuted,
        textAlign: "center",
        lineHeight: 21,
        marginTop: 8,
    },
    browseButton: {
        backgroundColor: colors.primary,
        borderRadius: radius.pill,
        paddingHorizontal: 28,
        paddingVertical: 15,
        marginTop: 20,
    },
    browseButtonText: {
        color: colors.surface,
        fontWeight: "700",
    },
});