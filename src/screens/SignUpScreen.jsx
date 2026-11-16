import styles from "../styles/SignUpScreen.styles";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
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
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Join our pet adoption community</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                    // onChangeText={onChangeText}
                    // value={text}
                    />
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
                        <Text style={styles.primaryButtonText}>Sign Up</Text>
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    <Text>Already have an account?</Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.link}>Log In</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}