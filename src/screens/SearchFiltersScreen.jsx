import { View, Text, FlatList, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/SearchFiltersScreen.styles";
import PetCard from "../components/PetCard";
import { PETS } from "../data/pets";

export default function SearchFiltersScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>

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
            />


            <View style={styles.filterGroup}>
                <View style={styles.optionsRow}>
                    <Pressable style={[styles.option, styles.optionActive]}>
                        <Text style={[styles.optionText, styles.optionTextActive]}>
                            All
                        </Text>
                    </Pressable>

                    <Pressable style={styles.option}>
                        <Text style={styles.optionText}>Dogs</Text>
                    </Pressable>

                    <Pressable style={styles.option}>
                        <Text style={styles.optionText}>Cats</Text>
                    </Pressable>

                    <Pressable style={styles.option}>
                        <Text style={styles.optionText}>Other</Text>
                    </Pressable>
                </View>
            </View>

            <FlatList
                data={PETS}
                renderItem={({ item }) => (
                    <PetCard
                        pet={item}
                        onPress={() =>
                            navigation.navigate("PetDetails", {
                                petId: item.id,
                            })
                        }
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            />

        </SafeAreaView>
    );
}

