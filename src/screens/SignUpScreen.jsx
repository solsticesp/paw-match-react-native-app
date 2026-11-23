import styles from "../styles/SignUpScreen.styles";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useUserContext } from "../contexts/user/UserContext";

export default function SignUpScreen({ navigation }) {
    const { register } = useUserContext();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const changeHandler = (name, value) => {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const submitHandler = async () => {
        await register(values.email, values.password, values.firstName, values.lastName);
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
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Join our pet adoption community</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        onChangeText={(text) => changeHandler('firstName', text)}
                        value={values.firstName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        onChangeText={(text) => changeHandler('lastName', text)}
                        value={values.lastName}
                    />
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

                    <TextInput
                        style={styles.input}
                        placeholder="Repeat Password"
                        onChangeText={(text) => changeHandler('confirmPassword', text)}
                        value={values.confirmPassword}
                        secureTextEntry
                    />
                    <Pressable style={styles.primaryButton} onPress={submitHandler}>
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