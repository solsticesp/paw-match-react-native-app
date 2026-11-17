import { View, Text, Image, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/HomeScreen.styles";
import { colors } from "../styles/theme";
import { PETS } from "../data/pets";
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

    const renderHeader = () => (
        <View>
            {/* Header */}
            <View style={styles.topRow}>
                <View>
                    <Text style={styles.greeting}>Hello, {name}</Text>
                    <Text style={styles.subtitle}>
                        Let's find a pet a home ❤️
                    </Text>
                </View>

                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {initials || "U"}
                    </Text>
                </View>
            </View>

            {/* Search */}
            <Pressable
                style={styles.searchBar}
                onPress={() =>
                    navigation.navigate("PetStack", {
                        screen: "Search",
                    })
                }
            >
                <Ionicons name="search-outline" size={20} color="#888" />
                <Text style={styles.searchPlaceholder}>
                    Search Pets...
                </Text>
            </Pressable>

            {/* Banner */}
            <View style={styles.banner}>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>
                        Adopt Don't Shop
                    </Text>

                    <Ionicons
                        name="paw"
                        size={28}
                        color={colors.surface}
                        style={styles.bannerPaw}
                    />
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
                    onPress={() =>
                        navigation.navigate("PetStack", {
                            screen: "Search",
                        })
                    }
                >
                    <Text style={styles.seeAll}>See All</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <FlatList
                data={PETS}
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
