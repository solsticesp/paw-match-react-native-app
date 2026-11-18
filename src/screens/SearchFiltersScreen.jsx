import { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/SearchFiltersScreen.styles";
import { PETS } from "../data/pets";
import PetCardHorizontal from "../components/PetCardHorizontal";

const FILTERS = ["All", "Dogs", "Cats", "Other"];

export default function SearchFiltersScreen({ navigation }) {

    const [selectedFilter, setSelectedFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredPets = PETS.filter((pet) => {

        const matchesFilter =
            selectedFilter === "All" ||
            pet.species.toLowerCase() === selectedFilter.toLowerCase().replace(/s$/, "");

        const searchText = search.toLowerCase();

        const matchesSearch =
            pet.name.toLowerCase().includes(searchText) ||
            pet.species.toLowerCase().includes(searchText) ||
            pet.breed?.toLowerCase().includes(searchText);

        return matchesFilter && matchesSearch;
    });

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>

            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </Pressable>

                <Text style={styles.title}>Find a Pet</Text>
            </View>

            <TextInput
                style={styles.searchInput}
                placeholder="Search pets..."
                placeholderTextColor="#888"
                value={search}
                onChangeText={setSearch}
            />

            {/* Filter Chips */}
            <View style={styles.filterGroup}>
                <View style={styles.optionsRow}>
                    {FILTERS.map((filter) => {
                        const isActive = selectedFilter === filter;

                        return (
                            <Pressable
                                key={filter}
                                style={[
                                    styles.option,
                                    isActive && styles.optionActive,
                                ]}
                                onPress={() => setSelectedFilter(filter)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        isActive && styles.optionTextActive,
                                    ]}
                                >
                                    {filter}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </View>

            {/* Pet List */}
            <FlatList
                data={filteredPets}
                renderItem={({ item }) => (
                    <PetCardHorizontal
                        pet={item}
                        onPress={() =>
                            navigation.navigate("PetDetails", {
                                petId: item.id,
                            })
                        }
                    />
                )}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>
                        No pets found.
                    </Text>
                }
            />

        </SafeAreaView>
    );
}
