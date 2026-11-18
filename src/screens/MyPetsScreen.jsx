import {
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/MyPetsScreen.styles";
import MyPetCard from "../components/MyPetCard";
import { MY_PETS } from "../data/pets";

export default function MyPetsScreen({ navigation }) {
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

                {/* Pet List */}
                <View style={styles.petList}>
                    {MY_PETS.map((pet) => (
                        <MyPetCard
                            key={pet.id}
                            pet={pet}
                            onEdit={(id) =>
                                navigation.navigate("AddPet", {
                                    petId: id,
                                })
                            }
                            onDelete={(id) => console.log("Delete pet:", id)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
