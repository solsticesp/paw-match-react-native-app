import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.md,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },
    backButton: {
        marginRight: 18,
    },
    title: {
        fontSize: 21,
        fontWeight: "800",
        color: colors.text,
    },
    searchInput: {
        height: 48,
        borderRadius: radius.pill,
        backgroundColor: colors.input,
        paddingHorizontal: 16,
        marginBottom: 22,
        color: colors.text,
    },
    filterGroup: {
        marginBottom: 22,
    },
    label: {
        color: colors.text,
        fontWeight: "800",
        fontSize: 15,
        marginBottom: 10,
    },
    optionsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 9,
        borderRadius: radius.pill,
        backgroundColor: "#EEECE6",
    },
    optionActive: {
        backgroundColor: colors.primary,
    },
    optionText: {
        color: colors.text,
        fontWeight: "600",
        fontSize: 13,
    },
    optionTextActive: {
        color: colors.surface,
    },
    applyButton: {
        minHeight: 52,
        borderRadius: radius.pill,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
    },
    applyButtonText: {
        color: colors.surface,
        fontWeight: "700",
        fontSize: 15,
    },
});