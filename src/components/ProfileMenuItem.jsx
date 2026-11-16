import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Profile.styles";

export default function ProfileMenuItem({
    icon,
    label,
    onPress,
    danger = false,
}) {
    return (
        <Pressable
            style={styles.menuItem}
            onPress={onPress}
        >
            <Ionicons
                name={icon}
                style={styles.menuIcon}
                color={danger ? "#E05252" : undefined}
            />

            <Text style={[
                styles.menuLabel,
                danger && styles.logoutLabel
            ]}>
                {label}
            </Text>

            <Ionicons
                name="chevron-forward"
                style={styles.menuArrow}
            />
        </Pressable>
    );
}