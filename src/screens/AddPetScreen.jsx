
import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/AddPetScreen.styles";

export default function AddPetScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={22} color="#252923" />
                    </Pressable>

                    <Text style={styles.title}>Add a Pet</Text>
                </View>

                <Text style={styles.subtitle}>
                    Help a furry friend find their forever home.
                </Text>

                {/* Image Upload */}
                <Text style={styles.sectionTitle}>Pet Photo</Text>

                <Pressable style={styles.imageUpload}>
                    <Ionicons name="camera-outline" size={32} color="#58745A" />
                    <Text style={styles.uploadTitle}>Upload a photo</Text>
                    <Text style={styles.uploadSubtitle}>
                        Add a clear photo of your pet
                    </Text>
                </Pressable>

                {/* Basic Information */}
                <Text style={styles.sectionTitle}>Basic Information</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter pet name"
                        placeholderTextColor="#777D74"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Species</Text>
                    <View style={styles.optionRow}>
                        {["Dog", "Cat", "Other"].map((item) => (
                            <View key={item} style={styles.optionChip}>
                                <Text style={styles.optionText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Breed</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter breed"
                        placeholderTextColor="#777D74"
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.halfInput}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. 2 years"
                            placeholderTextColor="#777D74"
                        />
                    </View>

                    <View style={styles.halfInput}>
                        <Text style={styles.label}>Gender</Text>
                        <View style={styles.optionRow}>
                            <View style={styles.optionChip}>
                                <Text style={styles.optionText}>Male</Text>
                            </View>
                            <View style={styles.optionChip}>
                                <Text style={styles.optionText}>Female</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Size</Text>
                    <View style={styles.optionRow}>
                        {["Small", "Medium", "Large"].map((item) => (
                            <View key={item} style={styles.optionChip}>
                                <Text style={styles.optionText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Additional Information */}
                <Text style={styles.sectionTitle}>
                    Additional Information
                </Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Location</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City or town"
                        placeholderTextColor="#777D74"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>About the Pet</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tell us about your pet's personality, habits and needs..."
                        placeholderTextColor="#777D74"
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />
                </View>

                {/* Submit */}
                <Pressable style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                        Publish Pet
                    </Text>
                    <Ionicons name="paw" size={18} color="#FFFFFF" />
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}
