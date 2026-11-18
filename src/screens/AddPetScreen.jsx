
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
import { useEffect, useState } from "react";
import { MY_PETS } from "../data/pets";

export default function AddPetScreen({
    navigation,
    route,
    id,
}) {

    const petId = route.params?.petId;

    const isEditing = Boolean(petId);

    const [form, setForm] = useState({
        name: "",
        species: "",
        age: "",
        gender: "",
        size: "",
        location: "",
        description: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (isEditing) {
            const pet = MY_PETS.find(
                (item) => item.id === petId
            );

            if (pet) {
                setForm({
                    name: pet.name,
                    species: pet.species,
                    breed: pet.breed,
                    age: String(pet.age),
                    gender: pet.gender,
                    size: pet.size,
                    location: pet.location,
                    description: pet.description,
                    imageUrl: pet.imageUrl,
                });
            }
        }
    }, [petId, isEditing]);

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={22} color="#252923" />
                    </Pressable>

                    <Text style={styles.title}>
                        {isEditing ? "Edit Pet" : "Add a Pet"}
                    </Text>
                </View>

                <Text style={styles.subtitle}>
                    {isEditing
                        ? "Update your pet's information."
                        : "Help a furry friend find their forever home."}
                </Text>

                {/* Image Upload */}
                {/* <Text style={styles.sectionTitle}>Pet Photo</Text>

                <Pressable style={styles.imageUpload}>
                    <Ionicons name="camera-outline" size={32} color="#58745A" />
                    <Text style={styles.uploadTitle}>Upload a photo</Text>
                    <Text style={styles.uploadSubtitle}>
                        Add a clear photo of your pet
                    </Text>
                </Pressable> */}

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Image URL</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Paste image URL here"
                        placeholderTextColor="#777D74"
                        value={form.imageUrl}
                        onChangeText={(value) => updateField("imageUrl", value)}
                        autoCapitalize="none"
                        keyboardType="url"
                    />

                    {form.imageUrl.trim() !== "" && (
                        <Image
                            source={{ uri: form.imageUrl }}
                            style={styles.petImage}
                            resizeMode="cover"
                        />
                    )}
                </View>

                <Text style={styles.sectionTitle}>Basic Information</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Name</Text>
                    <TextInput
                        style={styles.input}
                        value={form.name}
                        placeholder="Enter pet name"
                        placeholderTextColor="#777D74"
                    // onChangeText={(value) => updateField("name", value)}
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Species</Text>
                        <View style={styles.optionRow}>
                            {["Dog", "Cat", "Other"].map((item) => (
                                <Pressable
                                    key={item}
                                    style={[
                                        styles.optionChip,
                                        form.species.toLowerCase() === item.toLowerCase() &&
                                        styles.selectedOptionChip,
                                    ]}
                                    onPress={() => updateField("species", item.toLowerCase())}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            form.species.toLowerCase() === item.toLowerCase() &&
                                            styles.selectedOptionText,
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    <View style={styles.halfInput}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput
                            style={styles.input}
                            value={form.age}
                            placeholder="e.g. 2 years"
                            placeholderTextColor="#777D74"
                            // onChangeText={(value) => updateField("age", value)}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <Text style={styles.sectionTitle}>
                    Additional Information
                </Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Location</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City or town"
                        placeholderTextColor="#777D74"
                        value={form.location}
                        onChangeText={(value) => updateField("location", value)}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>About the Pet</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tell us about your pet's personality, habits and needs..."
                        value={form.description}
                        // onChangeText={(value) => updateField("description", value)}
                        placeholderTextColor="#777D74"
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />
                </View>

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
