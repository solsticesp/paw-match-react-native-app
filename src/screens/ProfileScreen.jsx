import { View, Text, ScrollView, Pressable } from "react-native";
import styles from "../styles/Profile.styles";
import ProfileMenuItem from "../components/ProfileMenuItem";
import { useUserContext } from "../contexts/user/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({
    name,
    email,
    navigation,
}) {
    const initials = name
        ?.split(" ")
        .map(part => part[0])
        .join("")
        .toUpperCase();

    const { logout } = useUserContext();

    return (
        <SafeAreaView
            style={[{ flex: 1 }, styles.container]}
            edges={["top"]}
        >
            <View style={styles.content}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {initials || "U"}
                        </Text>
                    </View>

                    <Text style={styles.name}>Ivan</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>


                <View style={styles.logoutMenu}>
                    <ProfileMenuItem
                        icon="log-out-outline"
                        label="Log Out"
                        danger
                        onPress={logout}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}