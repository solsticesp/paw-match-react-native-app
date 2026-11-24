import { Text, Pressable, StyleSheet } from "react-native";
import { colors, radius } from "../styles/theme";

export default function FilterChip({ label, isActive, onPress }) {
    return (
        <Pressable
            style={[
                styles.option,
                isActive && styles.optionActive,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.optionText,
                    isActive && styles.optionTextActive,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
})