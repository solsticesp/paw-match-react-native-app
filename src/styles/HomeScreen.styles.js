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

    petRow: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 36,
    },
    greeting: {
        fontSize: 32,
        fontWeight: "800",
        color: colors.text,
    },
    subtitle: {
        fontSize: 18,
        color: colors.textMuted,
        marginTop: 4,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        fontSize: 14,
        color: colors.primaryDark,
        fontWeight: "600",
    },
    banner: {
        flexDirection: "row",
        height: 220,
        borderRadius: radius.lg,
        backgroundColor: "#A6B99A",
        overflow: "hidden",
        marginBottom: 46,
    },
    bannerTextContainer: {
        flex: 1.15,
        padding: 16,
        justifyContent: "center",
    },
    bannerTitle: {
        color: colors.surface,
        fontSize: 27,
        fontWeight: "800",
        lineHeight: 26,
    },
    bannerSubtitle: {
        color: colors.surface,
        fontSize: 12,
        lineHeight: 17,
        marginTop: 7,
        marginBottom: 14,
    },
    bannerButton: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: colors.surface,
        borderRadius: radius.pill,
        paddingVertical: 15,
        paddingHorizontal: 18,
        gap: 6,
    },
    bannerButtonText: {
        color: colors.primaryDark,
        fontSize: 14,
        fontWeight: "700",
    },
    bannerImage: {
        flex: 0.85,
        height: "100%",
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 19,
        fontWeight: "800",
    },
    seeAll: {
        color: colors.primaryDark,
        fontWeight: "700",
    },
    categoryRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 22,
    },
    categoryChip: {
        backgroundColor: colors.surface,
        borderRadius: radius.pill,
        paddingVertical: 9,
        paddingHorizontal: 16,
    },
    categoryChipActive: {
        backgroundColor: colors.primary,
    },
    categoryText: {
        color: colors.text,
        fontWeight: "600",
    },
    categoryTextActive: {
        color: colors.surface,
    },
});