import { View, Text, ScrollView, Pressable } from "react-native";
import styles from "../styles/Profile.styles";
import ProfileMenuItem from "../components/ProfileMenuItem";
import { useUserContext } from "../contexts/user/UserContext";

export default function ProfileScreen({
    name,
    email,
}) {
    const initials = name
        ?.split(" ")
        .map(part => part[0])
        .join("")
        .toUpperCase();

    const { logout } = useUserContext();

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {initials || "U"}
                    </Text>
                </View>

                <Text style={styles.name}>Ivan</Text>
                <Text style={styles.email}>{email}</Text>
            </View>

            <View style={styles.menu}>
                <ProfileMenuItem
                    icon="person-outline"
                    label="Edit Profile"
                    onPress={() => { }}
                />

                <ProfileMenuItem
                    icon="heart-outline"
                    label="My Favorites"
                    onPress={() => { }}
                />

                <ProfileMenuItem
                    icon="paw-outline"
                    label="My Applications"
                    onPress={() => { }}
                />
            </View>

            <View style={styles.logoutMenu}>
                <ProfileMenuItem
                    icon="log-out-outline"
                    label="Log Out"
                    danger
                    onPress={logout}
                />
            </View>
        </ScrollView>
    );
}