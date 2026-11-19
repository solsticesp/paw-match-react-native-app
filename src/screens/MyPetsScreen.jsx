// import {
//     View,
//     Text,
//     Pressable,
//     Image,
//     ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";

// import styles from "../styles/MyPetsScreen.styles";
// import MyPetCard from "../components/MyPetCard";
// import { MY_PETS } from "../data/pets";

// export default function MyPetsScreen({ navigation }) {
//     return (
//         <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
//             <ScrollView
//                 contentContainerStyle={styles.content}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {/* Header */}
//                 <View style={styles.header}>
//                     <Text style={styles.title}>My Pets</Text>

//                     <Pressable
//                         style={styles.addButton}
//                         onPress={() => navigation.navigate("AddPet")}
//                     >
//                         <Ionicons name="add" size={20} color="#FFFFFF" />
//                         <Text style={styles.addButtonText}>Add Pet</Text>
//                     </Pressable>
//                 </View>

//                 <Text style={styles.subtitle}>
//                     Manage the pets you've listed for adoption.
//                 </Text>

//                 {/* Pet List */}
//                 <View style={styles.petList}>
//                     {MY_PETS.map((pet) => (
//                         <MyPetCard
//                             key={pet.id}
//                             pet={pet}
//                             onEdit={(id) =>
//                                 navigation.navigate("AddPet", {
//                                     petId: id,
//                                 })
//                             }
//                             onDelete={(id) => console.log("Delete pet:", id)}
//                         />
//                     ))}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }



import { useState, useCallback } from "react";

import {
    View,
    Text,
    Pressable,
    ScrollView,
    Alert,
    ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../styles/MyPetsScreen.styles";
import MyPetCard from "../components/MyPetCard";
import { petsApi } from "../api";

export default function MyPetsScreen({ navigation }) {
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch all pets from Supabase
    const fetchPets = async () => {
        try {
            const data = await petsApi.getAll();
            setPets(data);
        } catch (error) {
            console.log(
                "Error fetching pets:",
                error.response?.data || error.message
            );

            Alert.alert("Error", "Could not load pets.");
        } finally {
            setIsLoading(false);
        }
    };

    // Refresh the list whenever the screen becomes active
    useFocusEffect(
        useCallback(() => {
            fetchPets();
        }, [])
    );

    // Delete pet
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
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
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

                {/* Loading */}
                {isLoading ? (
                    <ActivityIndicator size="large" color="#58745A" />
                ) : pets.length === 0 ? (

                    /* Empty State */
                    <View style={styles.petList}>
                        <Text>No pets have been added yet.</Text>
                    </View>

                ) : (

                    /* Pet List */
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

