import * as Location from 'expo-location';
import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    Image,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/AddPetScreen.styles";
import { colors } from "../styles/theme";
import { useEffect, useState } from "react";
import { petsApi, categoryApi } from "../api";
import ScreenHeader from "../components/ScreenHeader";


export default function AddPetScreen({
    navigation,
    route,
}) {
    const petId = route.params?.petId;
    const isEditing = Boolean(petId);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({
        name: "",
        species: "",
        age: "",
        location: "",
        description: "",
        imageUrl: "",
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const categoryData = await categoryApi.getAll();
                setCategories(categoryData);

                if (isEditing) {
                    const pet = await petsApi.getById(petId);

                    if (!pet) {
                        Alert.alert("Error", "Pet not found.");
                        navigation.goBack();
                        return;
                    }

                    setForm({
                        name: pet.name || "",
                        species: pet.category_id || "",
                        age: String(pet.age ?? ""),
                        location: pet.location || "",
                        description: pet.description || "",
                        imageUrl: pet.image_url || "",
                    });
                }
            } catch (error) {
                console.log(
                    "Error loading pet data:",
                    error.response?.data || error.message
                );

                Alert.alert("Error", "Could not load pet information.");
            }
        };

        loadData();
    }, [petId, isEditing]);

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!form.name.trim() || !form.species) {
            Alert.alert(
                "Missing information",
                "Please enter a pet name and select a species."
            );
            return;
        }

        const selectedCategory = categories.find(
            (category) => category.id === form.species
        );

        if (!selectedCategory) {
            Alert.alert("Error", "Please select a valid species.");
            return;
        }

        const petData = {
            name: form.name.trim(),
            category_id: selectedCategory.id,
            age: form.age.trim() || null,
            location: form.location.trim(),
            description: form.description.trim(),
            image_url: form.imageUrl.trim() || null,
            ...(isEditing ? {} : { status: "Available" }),
        };

        try {
            setIsSubmitting(true);

            if (isEditing) {
                await petsApi.updatePet(petId, petData);
                Alert.alert("Success", "Pet updated successfully!");
            } else {
                await petsApi.addPet(petData);
                Alert.alert("Success", "Pet published successfully!");
            }

            navigation.goBack();

        } catch (error) {
            console.log(
                "Error saving pet:",
                error.response?.data || error.message
            );

            Alert.alert(
                "Error",
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const useCurrentLocationHandler = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});

        const reverseGeocode = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });

        updateField("location", `${reverseGeocode[0].city}, ${reverseGeocode[0].country}`)  
    }

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <ScreenHeader
                    title={isEditing ? "Edit Pet" : "Add a Pet"}
                    onBack={() => navigation.goBack()}
                />

                <Text style={styles.subtitle}>
                    {isEditing
                        ? "Update your pet's information."
                        : "Help a furry friend find their forever home."}
                </Text>

                {/* <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Image URL</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Paste image URL here"
                        placeholderTextColor="#777D74"
                        value={form.imageUrl}
                        onChangeText={(value) => updateField("imageUrl", value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        contextMenuHidden={false}
                        editable={true}
                    />

                    {form.imageUrl.trim() !== "" && (
                        <Image
                            source={{ uri: form.imageUrl }}
                            style={styles.petImage}
                            resizeMode="cover"
                        />
                    )}
                </View> */}

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Photo</Text>

                    <View style={styles.imageUpload}>
                        {false ? (
                            <Image
                                source={{ uri: imageUri }}
                                style={styles.petImage}
                                resizeMode="cover"
                            />
                        ) : (
                            <>
                                <Ionicons
                                    name="cloud-upload-outline"
                                    size={36}
                                    color={colors.primaryDark}
                                />

                                <Text style={styles.uploadTitle}>
                                    Upload a pet photo
                                </Text>

                                <Text style={styles.uploadSubtitle}>
                                    Choose from gallery or take a photo
                                </Text>
                            </>
                        )}
                    </View>

                    <View style={styles.imageButtons}>
                        <Pressable style={styles.imageButton} onPress={() => { }}>
                            <Ionicons name="images-outline" size={20} color={colors.primaryDark} />
                            <Text style={styles.imageButtonText}>Gallery</Text>
                        </Pressable>

                        <Pressable style={styles.imageButton} onPress={() => { }}>
                            <Ionicons name="camera-outline" size={20} color={colors.primaryDark} />
                            <Text style={styles.imageButtonText}>Camera</Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Basic Information</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pet Name</Text>
                    <TextInput
                        style={styles.input}
                        value={form.name}
                        placeholder="Enter pet name"
                        placeholderTextColor="#777D74"
                        onChangeText={(value) => updateField("name", value)}
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Species</Text>
                        <View style={styles.optionRow}>
                            {categories.map((item) => (
                                <Pressable
                                    key={item.id}
                                    style={[
                                        styles.optionChip,
                                        form.species === item.id && styles.selectedOptionChip,
                                    ]}
                                    onPress={() => updateField("species", item.id)}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            form.species === item.id && styles.selectedOptionText,
                                        ]}
                                    >
                                        {item.name}
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
                            onChangeText={(value) => updateField("age", value)}
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
                    <Pressable
                        style={styles.locationButton}
                        onPress={useCurrentLocationHandler}
                    >
                        <Ionicons
                            name="navigate-outline"
                            size={17}
                            color={colors.primary}
                        />
                        <Text style={styles.locationButtonText}>
                            Use my location
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>About the Pet</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tell us about your pet's personality, habits and needs..."
                        value={form.description}
                        onChangeText={(value) => updateField("description", value)}
                        placeholderTextColor="#777D74"
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />
                </View>

                <Pressable
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                >
                    <Text style={styles.submitButtonText}>
                        {isSubmitting
                            ? "Saving..."
                            : isEditing
                                ? "Update Pet"
                                : "Publish Pet"}
                    </Text>

                    <Ionicons name="paw" size={18} color="#FFFFFF" />
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}
