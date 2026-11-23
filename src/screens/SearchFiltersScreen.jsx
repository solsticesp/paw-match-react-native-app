import { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    Pressable,
    Alert,
    RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/SearchFiltersScreen.styles";
import PetCardHorizontal from "../components/PetCardHorizontal";
import { petsApi, categoryApi } from '../api';
import FilterChip from "../components/FilterChip";
import ScreenHeader from "../components/ScreenHeader";

export default function SearchFiltersScreen({
    navigation,
}) {
    const [categories, setCategories] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [pets, setPets] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        try {
            const [petsResult, categoriesResult] = await Promise.all([
                petsApi.getAll(),
                categoryApi.getAll(),
            ]);

            setPets(petsResult);
            setCategories(categoriesResult);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filters = [
        "All",
        ...categories.map((category) => category.name),
    ];

    const filteredPets = pets.filter((pet) => {
        const category = pet.categories?.name?.toLowerCase();

        const matchesFilter =
            selectedFilter === "All" ||
            category === selectedFilter.toLowerCase();

        const searchText = search.toLowerCase();

        const matchesSearch =
            pet.name.toLowerCase().includes(searchText) ||
            category?.includes(searchText);

        return matchesFilter && matchesSearch;
    });

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <ScreenHeader
                title="Find a Pet"
                onBack={() => navigation.goBack()}
            />

            <TextInput
                style={styles.searchInput}
                placeholder="Search pets..."
                placeholderTextColor="#888"
                value={search}
                onChangeText={setSearch}
            />

            <View style={styles.filterGroup}>
                <View style={styles.optionsRow}>
                    {filters.map((filter) => (
                        <FilterChip
                            key={filter}
                            label={filter}
                            isActive={selectedFilter === filter}
                            onPress={() => setSelectedFilter(filter)}
                        />
                    ))}
                </View>
            </View>

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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="#777D74"
                        colors={["#777D74"]}
                    />
                }
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
