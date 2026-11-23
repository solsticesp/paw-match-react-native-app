// import { View, Text, ScrollView, Pressable } from "react-native";
// import styles from "../styles/Profile.styles";
// import ProfileMenuItem from "../components/ProfileMenuItem";
// import { useUserContext } from "../contexts/user/UserContext";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function ProfileScreen({
//     name,
//     email,
//     navigation,
// }) {
//     const initials = name
//         ?.split(" ")
//         .map(part => part[0])
//         .join("")
//         .toUpperCase();

//     const { logout } = useUserContext();

//     return (
//         <SafeAreaView
//             style={[{ flex: 1 }, styles.container]}
//             edges={["top"]}
//         >
//             <View style={styles.content}>
//                 <View style={styles.profileHeader}>
//                     <View style={styles.avatar}>
//                         <Text style={styles.avatarText}>
//                             {initials || "U"}
//                         </Text>
//                     </View>

//                     <Text style={styles.name}>Ivan</Text>
//                     <Text style={styles.email}>{email}</Text>
//                 </View>


//                 <View style={styles.logoutMenu}>
//                     <ProfileMenuItem
//                         icon="log-out-outline"
//                         label="Log Out"
//                         danger
//                         onPress={logout}
//                     />
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }


import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Profile.styles";
import ProfileMenuItem from "../components/ProfileMenuItem";
import { useUserContext } from "../contexts/user/UserContext";

export default function ProfileScreen() {
    const { user, logout } = useUserContext();

    const firstName = user?.user_metadata?.first_name || "";
    const lastName = user?.user_metadata?.last_name || "";

    const fullName = `${firstName} ${lastName}`.trim();

    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`
        .toUpperCase();

    const email = user?.email || "";

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

                    <Text style={styles.name}>
                        {fullName || "User"}
                    </Text>

                    <Text style={styles.email}>
                        {email}
                    </Text>
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
