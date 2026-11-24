import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, spacing } from "../styles/theme";

export default function ScreenHeader({ title, onBack }) {
    return (
        <View style={styles.header}>
            <Pressable
                style={styles.backButton}
                onPress={onBack}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </Pressable>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.lg,
    },
    backButton: {
        marginRight: spacing.md,
    },
    title: {
        fontSize: 22,
        fontWeight: "800",
        color: colors.text,
    },
});