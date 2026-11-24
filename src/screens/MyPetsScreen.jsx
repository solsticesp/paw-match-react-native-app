import { useState, useCallback } from "react";
import {
    View,
    Text,
    Pressable,
    ScrollView,
    Alert,
    ActivityIndicator,
    RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../styles/MyPetsScreen.styles";
import MyPetCard from "../components/MyPetCard";
import { petsApi } from "../api";
import { useUserContext } from "../contexts/user/UserContext";

export default function MyPetsScreen({ navigation }) {
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { user } = useUserContext();

    const fetchPets = async (refresh = false) => {
        try {
            if (refresh) {
                setIsRefreshing(true);
            } else {
                setIsLoading(true);
            }

            if (!user?.id) {
                setPets([]);
                return;
            }

            const data = await petsApi.getMyPets(user.id);
            setPets(data);

        } catch (error) {
            console.log(
                "Error fetching pets:",
                error.response?.data || error.message
            );

            Alert.alert("Error", "Could not load your pets.");
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchPets();
        }, [user?.id])
    );

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Pet",
            "Are you sure you want to delete this pet?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await petsApi.deletePet(id);

                            setPets((prevPets) =>
                                prevPets.filter((pet) => pet.id !== id)
                            );
                        } catch (error) {
                            console.log(
                                "Error deleting pet:",
                                error.response?.data || error.message
                            );

                            Alert.alert(
                                "Error",
                                "Could not delete this pet."
                            );
                        }
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={() => fetchPets(true)}
                        tintColor="#58745A"
                        colors={["#58745A"]}
                    />
                }
            >
                <View style={styles.header}>
                    <Text style={styles.title}>My Pets</Text>

                    <Pressable
                        style={styles.addButton}
                        onPress={() => navigation.navigate("AddPet")}
                    >
                        <Ionicons name="add" size={20} color="#FFFFFF" />
                        <Text style={styles.addButtonText}>Add Pet</Text>
                    </Pressable>
                </View>

                <Text style={styles.subtitle}>
                    Manage the pets you've listed for adoption.
                </Text>

                {isLoading ? (
                    <ActivityIndicator size="large" color="#58745A" />
                ) : pets.length === 0 ? (

                    <View style={styles.petList}>
                        <Text>No pets have been added yet.</Text>
                    </View>

                ) : (

                    <View style={styles.petList}>
                        {pets.map((pet) => (
                            <MyPetCard
                                key={pet.id}
                                pet={pet}
                                onEdit={(id) =>
                                    navigation.navigate("AddPet", {
                                        petId: id,
                                    })
                                }
                                onDelete={handleDelete}
                            />
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

