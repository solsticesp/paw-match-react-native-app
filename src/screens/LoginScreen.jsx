import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styles from "../styles/LoginScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useUserContext } from "../contexts/user/UserContext";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useUserContext();

    const signUpHandler = () => {
        navigation.navigate('SignUp');
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
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
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />

                    <Pressable style={styles.primaryButton} onPress={login}>
                        <Text style={styles.primaryButtonText}>Login</Text>
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    <Text>Don't have an account?</Text>
                    <Pressable onPress={signUpHandler}>
                        <Text style={styles.link}>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

}