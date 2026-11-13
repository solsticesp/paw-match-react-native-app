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
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
    },
    greeting: {
        fontSize: 25,
        fontWeight: "800",
        color: colors.text,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textMuted,
        marginTop: 4,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.primaryLight,
    },
    searchBar: {
        height: 48,
        borderRadius: radius.pill,
        backgroundColor: colors.input,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 18,
    },
    searchPlaceholder: {
        color: colors.textMuted,
        marginLeft: 8,
        fontSize: 14,
    },
    banner: {
        height: 145,
        borderRadius: radius.lg,
        backgroundColor: "#A6B99A",
        overflow: "hidden",
        padding: 18,
        justifyContent: "center",
        marginBottom: 24,
    },
    bannerTitle: {
        color: colors.surface,
        fontSize: 22,
        fontWeight: "800",
        width: "55%",
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
    petGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
    },
    petCard: {
        width: "48%",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.border,
    },
    petImage: {
        width: "100%",
        height: 128,
        backgroundColor: colors.primaryLight,
    },
    petInfo: {
        padding: 10,
    },
    petName: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.text,
    },
    petMeta: {
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 4,
    },
});