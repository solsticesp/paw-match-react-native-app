import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../styles/LoginScreen.styles";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
    const signUpHandler = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name="paw"
                    size={70}
                    style={styles.logoMark}
                />
                <Text style={styles.logo}>PawMatch</Text>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Log in to continue</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                // onChangeText={onChangeText}
                // value={text}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                // onChangeText={onChangeText}
                // value={text}
                />
                <Pressable style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Login</Text>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={signUpHandler}>
                    <Text style={styles.link}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );

}