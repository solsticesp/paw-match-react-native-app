import { View, Text, Image, ScrollView, Pressable, RefreshControl, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from 'react';

import styles from "../styles/PetDetailsScreen.styles";
import { petsApi } from '../api';
import { useUserContext } from "../contexts/user/UserContext";

export default function PetDetailsScreen({
    navigation,
    route,
}) {
    const { petId } = route.params;
    const [pet, setPet] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const { user } = useUserContext();

    useEffect(() => {
        petsApi.getById(petId)
            .then(result => setPet(result))
            .catch(error => Alert.alert("Error", error.message))
        // .finally(() => setLoading(false));
    }, [petId]);

    if (!pet) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Pet not found.</Text>
            </SafeAreaView>
        );
    }

    const category = pet.categories?.name || "Pet";
    const isOwner = user?.id === pet.user_id;

    const handleRefresh = async () => {
        setRefreshing(true);

        try {
            const data = await petsApi.getById(petId);
            setPet(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setRefreshing(false);
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>

            <ScrollView
                refreshControl={<RefreshControl refreshing={false} onRefresh={handleRefresh} />}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={{ uri: pet.image_url }}
                        style={styles.heroImage}
                        resizeMode="cover"
                    />

                    <View style={styles.imageControls}>
                        <Pressable
                            style={styles.roundButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="arrow-back" size={22} color="#333" />
                        </Pressable>

                        <Pressable style={styles.roundButton}>
                            <Ionicons name="heart-outline" size={22} color="#333" />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.content}>

                    <View style={styles.titleRow}>
                        <Text style={styles.petName}>{pet.name}</Text>

                        <Text style={styles.availability}>
                            Available
                        </Text>
                    </View>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaText}>
                            <Ionicons name="calendar-outline" size={16} />
                            {" "}{pet.age} {pet.age === 1 ? "year" : "years"} old
                        </Text>

                        <Text style={styles.metaText}>
                            <Ionicons name="paw-outline" size={16} />
                            {" "}{category.charAt(0).toUpperCase() + category.slice(1)}
                        </Text>

                        <Text style={styles.metaText}>
                            <Ionicons name="location-outline" size={16} />
                            {" "}{pet.location}
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>
                        About {pet.name}
                    </Text>

                    <Text style={styles.description}>
                        {pet.description}
                    </Text>

                </View>
            </ScrollView>

            {!isOwner && pet.status === "Available" && (
                <View style={styles.bottomAction}>
                    <Pressable
                        style={styles.primaryButton}
                        onPress={() =>
                            navigation.navigate("ApplicationForm", { pet })
                        }
                    >
                        <Text style={styles.primaryButtonText}>
                            Apply to Adopt
                        </Text>
                    </Pressable>
                </View>
            )}

        </SafeAreaView>
    );
}