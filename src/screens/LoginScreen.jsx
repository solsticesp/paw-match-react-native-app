import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styles from "../styles/LoginScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useUserContext } from "../contexts/user/UserContext";

export default function LoginScreen({ navigation }) {
    const { login } = useUserContext();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (name, value) => {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const submitHandler = async () => {
        await login(values.email, values.password);
    }

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
                        onChangeText={(text) => changeHandler('email', text)}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={(text) => changeHandler('password', text)}
                        value={values.password}
                        secureTextEntry
                    />

                    <Pressable style={styles.primaryButton} onPress={submitHandler}>
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