import {
    Pressable,
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";

import { useState } from "react";
import styles from "../styles/ApllicationFormScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import { useUserContext } from "../contexts/user/UserContext";
import { applicationsApi } from "../api";

export default function ApllicationFormScreen({ navigation, route }) {
    const { pet } = route.params;
    const { user } = useUserContext();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const submitHandler = async () => {
        // Validate required fields
        if (!fullName.trim() || !email.trim() || !phone.trim()) {
            Alert.alert(
                "Missing information",
                "Please fill in your name, email and phone number."
            );
            return;
        }

        if (!user?.id) {
            Alert.alert(
                "Authentication required",
                "Please log in to submit an application."
            );
            return;
        }

        try {
            setIsSubmitting(true);

            const applicationData = {
                pet_id: pet.id,
                applicant_id: user.id,
                full_name: fullName.trim(),
                email: email.trim().toLowerCase(),
                phone: phone.trim(),
                message: message.trim() || null,
            };

            await applicationsApi.createApplication(applicationData);

            Alert.alert(
                "Application submitted!",
                `Your application to adopt ${pet.name} has been sent.`,
                [
                    {
                        text: "OK",
                        onPress: () => navigation.goBack(),
                    },
                ]
            );

        } catch (error) {
            console.log(
                "Submit application error:",
                error.response?.data || error.message
            );

            if (error.response?.data?.code === "23505") {
                Alert.alert(
                    "Already applied",
                    "You have already submitted an application for this pet."
                );
            } else {
                Alert.alert(
                    "Something went wrong",
                    "Your application could not be submitted. Please try again."
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                >
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            contentContainerStyle={[
                                styles.content,
                                { flexGrow: 1 },
                            ]}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >

                            <ScreenHeader
                                title="Adoption Application"
                                onBack={() => navigation.goBack()}
                            />

                            <View style={styles.petSummary}>
                                <Image
                                    source={{ uri: pet.image_url }}
                                    style={styles.petImage}
                                    resizeMode="cover"
                                />

                                <View>
                                    <Text style={styles.petName}>
                                        {pet.name}
                                    </Text>
                                    <Text style={styles.petMeta}>
                                        {pet.age} {pet.age === 1 ? "year" : "years"} • {pet.categories?.name}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.sectionTitle}>
                                Your Information
                            </Text>

                            <View style={styles.inputGroup}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChangeText={setFullName}
                                    autoCapitalize="words"
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Email Address"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType="phone-pad"
                                />

                                <Text style={styles.sectionTitle}>
                                    Why do you want to adopt {pet.name}?
                                </Text>

                                <TextInput
                                    style={[styles.messageInput, styles.input]}
                                    placeholder="Tell us more about yourself..."
                                    value={message}
                                    onChangeText={setMessage}
                                    multiline
                                    numberOfLines={4}
                                    textAlignVertical="top"
                                />
                            </View>

                            <Pressable
                                style={[
                                    styles.submitButton,
                                    isSubmitting && { opacity: 0.6 },
                                ]}
                                onPress={submitHandler}
                                disabled={isSubmitting}
                            >
                                <Text style={styles.submitButtonText}>
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                </Text>
                            </Pressable>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}