import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/PetDetailsScreen.styles";
import { PETS } from "../data/pets";

export default function PetDetailsScreen({ navigation, route }) {
    const { petId } = route.params;

    const pet = PETS.find((item) => item.id === petId);

    if (!pet) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Pet not found.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hero image */}
                <View>
                    <Image
                        source={{ uri: pet.imageUrl }}
                        style={styles.heroImage}
                        resizeMode="cover"
                    />

                    {/* Image controls */}
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

                {/* Pet information */}
                <View style={styles.content}>

                    <View style={styles.titleRow}>
                        <Text style={styles.petName}>{pet.name}</Text>

                        <Text style={styles.availability}>
                            Available
                        </Text>
                    </View>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaText}>
                            {pet.age} {pet.age === 1 ? "year" : "years"} old
                        </Text>

                        <Text style={styles.metaText}>
                            {pet.species.charAt(0).toUpperCase() + pet.species.slice(1)}
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>
                        About {pet.name}
                    </Text>

                    <Text style={styles.description}>
                        Meet {pet.name}! This lovely {pet.species} is looking
                        for a loving forever home. Get to know {pet.name}
                        and discover if you could be the perfect match.
                    </Text>

                </View>
            </ScrollView>

            {/* Bottom action */}
            <View style={styles.bottomAction}>
                <Pressable
                    style={styles.primaryButton}
                    onPress={() => console.log("Adoption application:", pet.id)}
                >
                    <Text style={styles.primaryButtonText}>
                        Apply to Adopt
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}