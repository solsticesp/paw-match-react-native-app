import { View, Text, Image, Pressable, FlatList, Alert, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/HomeScreen.styles";
import { colors } from "../styles/theme";
import { petsApi } from "../api";
import PetCard from "../components/PetCard";
import { useUserContext } from "../contexts/user/UserContext";


export default function HomeScreen({ navigation }) {
    const { user } = useUserContext();

    const name = `${user?.first_name || ""} ${user?.last_name || ""}`.trim();

    const initials = name
        .split(" ")
        .filter(Boolean)
        .map(part => part[0])
        .join("")
        .toUpperCase();

    const [featuredPets, setFeaturedPets] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        petsApi.getFeatured()
            .then(result => setFeaturedPets(result))
            .catch(error => Alert.alert("Error", error.message));
    }, []);

    const handleRefresh = async () => {
        setRefreshing(true);

        try {
            const data = await petsApi.getFeatured();
            setFeaturedPets(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setRefreshing(false);
        }
    };

    const renderHeader = () => (
        <View>
            <View style={styles.topRow}>
                <View>
                    <Text style={styles.greeting}>Hello, {name}</Text>
                    <Text style={styles.subtitle}>
                        Let's find a pet a home ❤️
                    </Text>
                </View>

                <Pressable
                    style={styles.avatar}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Text style={styles.avatarText}>
                        {initials || "U"}
                    </Text>
                </Pressable>
            </View>

            <View style={styles.banner}>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>
                        Adopt{"\n"}Don't Shop
                    </Text>

                    <Text style={styles.bannerSubtitle}>
                        Find your new best friend and give them a loving home.
                    </Text>

                    <Pressable
                        style={styles.bannerButton}
                        onPress={() => navigation.navigate("BrowsePets")}
                    >
                        <Text style={styles.bannerButtonText}>
                            Browse Pets
                        </Text>
                        <Ionicons
                            name="paw"
                            size={15}
                            color={colors.primaryDark}
                        />
                    </Pressable>
                </View>

                <Image
                    source={{
                        uri: "https://fsn1.your-objectstorage.com/ssmmedia/breeds/mtb-2026/golden-retriever-card-07a29442.jpg"
                    }}
                    style={styles.bannerImage}
                    resizeMode="cover"
                />
            </View>


            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Featured Pets</Text>

                <Pressable
                    onPress={() => navigation.navigate("BrowsePets")}
                >
                    <Text style={styles.seeAll}>See All</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <FlatList
                refreshControl={<RefreshControl refreshing={false} onRefresh={handleRefresh} />}
                data={featuredPets}
                numColumns={2}
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
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={renderHeader}
                columnWrapperStyle={styles.petRow}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
