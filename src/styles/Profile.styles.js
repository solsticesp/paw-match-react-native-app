import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: spacing.md,
        paddingTop: 38,
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 28,
    },
    avatar: {
        width: 92,
        height: 92,
        borderRadius: 46,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        fontSize: 34,
        color: colors.primaryDark,
        fontWeight: "800",
    },
    name: {
        fontSize: 21,
        fontWeight: "800",
        color: colors.text,
        marginTop: 14,
    },
    email: {
        fontSize: 13,
        color: colors.textMuted,
        marginTop: 5,
    },
    menu: {
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.border,
    },
    menuItem: {
        minHeight: 76,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    menuIcon: {
        width: 28,
        color: colors.text,
        fontSize: 18,
    },
    menuLabel: {
        flex: 1,
        color: colors.text,
        fontSize: 14,
        fontWeight: "600",
    },
    menuArrow: {
        color: colors.textMuted,
        fontSize: 20,
    },
    logoutMenu: {
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.border,
        marginTop: 20,
    },
    logoutLabel: {
        color: colors.danger,
    },
});