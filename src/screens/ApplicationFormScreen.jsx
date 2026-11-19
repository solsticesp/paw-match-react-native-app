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
} from "react-native";

import { useState } from "react";
import styles from "../styles/ApllicationFormScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ApllicationFormScreen({ navigation, route }) {
    const { pet } = route.params;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
                            <View style={styles.header}>
                                <Pressable
                                    style={styles.backButton}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Ionicons
                                        name="arrow-back"
                                        size={22}
                                        color="#333"
                                    />
                                </Pressable>

                                <Text style={styles.title}>
                                    Adoption Application
                                </Text>
                            </View>

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

                            <Pressable style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>
                                    Submit Application
                                </Text>
                            </Pressable>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}