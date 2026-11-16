// import { View, Text, ScrollView, Image, Pressable, FlatList } from "react-native";
// import styles from "../styles/HomeScreen.styles";
// import { colors } from "../styles/theme";
// import { Ionicons } from "@expo/vector-icons";
// import { PETS } from "../data/pets";
// import PetCard from "../components/PetCard";


// export default function HomeScreen({
//     navigation,
// }) {
//     return (
//         <View style={styles.container}>
//             <View style={styles.content}>
//                 <View style={styles.topRow}>
//                     <View>
//                         <Text style={styles.greeting}>Hello</Text>
//                         <Text style={styles.subtitle}>Let's find a pet a home ❤️</Text>
//                     </View>
//                     <View>
//                         <Image
//                             source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbgSKawqZV9F79Dw-_OLguSkCHbhtgzgdkCmotkROug&s=10' }}
//                             style={styles.avatar}
//                         />
//                     </View>
//                 </View>

//                 <Pressable
//                     style={styles.searchBar}
//                     onPress={() => navigation.navigate('PetStack', {
//                         screen: 'Search',
//                     })}
//                 >
//                     <Ionicons name="search-outline" size={20} color="#888" />
//                     <Text style={styles.searchPlaceholder}>Search Pets...</Text>
//                 </Pressable>

//                 <View style={styles.banner}>
//                     <View style={styles.bannerTextContainer}>
//                         <Text style={styles.bannerTitle}>Adopt Don't Shop</Text>
//                         <Ionicons
//                             name="paw"
//                             size={28}
//                             color={colors.surface}
//                             style={styles.bannerPaw}
//                         />
//                     </View>

//                     <Image
//                         source={{
//                             uri: 'https://fsn1.your-objectstorage.com/ssmmedia/breeds/mtb-2026/golden-retriever-card-07a29442.jpg'
//                         }}
//                         style={styles.bannerImage}
//                         resizeMode="cover"
//                     />
//                 </View>

//                 <View style={styles.categoryRow}>
//                     <View style={[styles.categoryChip, styles.categoryChipActive]}>
//                         <Text style={[styles.categoryText, styles.categoryTextActive]}>
//                             All
//                         </Text>
//                     </View>

//                     <View style={styles.categoryChip}>
//                         <Text style={styles.categoryText}>Dogs</Text>
//                     </View>

//                     <View style={styles.categoryChip}>
//                         <Text style={styles.categoryText}>Cats</Text>
//                     </View>

//                     <View style={styles.categoryChip}>
//                         <Text style={styles.categoryText}>Other</Text>
//                     </View>
//                 </View>

//                 <View>
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionTitle}>Featured Pets</Text>
//                         <Text style={styles.seeAll}>See All</Text>
//                     </View>

//                     <FlatList
//                         data={PETS}
//                         renderItem={({ item }) => (
//                             <PetCard
//                                 pet={item}
//                                 onPress={() =>
//                                     navigation.navigate("PetDetails", {
//                                         petId: item.id,
//                                     })
//                                 }
//                             />
//                         )}
//                         keyExtractor={(item) => item.id}
//                         showsVerticalScrollIndicator={false}
//                         contentContainerStyle={styles.petGrid}
//                     />
// {/* 
//                     <View style={styles.petGrid}>

//                         <View style={styles.petCard}>
//                             <Image style={styles.petImage} />
//                             <View style={styles.petInfo}>
//                                 <Text style={styles.petName}>Mila</Text>
//                                 <Text style={styles.petMeta}>2 years • Dog</Text>
//                             </View>
//                         </View>

//                         <View style={styles.petCard}>
//                             <Image style={styles.petImage} />
//                             <View style={styles.petInfo}>
//                                 <Text style={styles.petName}>Lili</Text>
//                                 <Text style={styles.petMeta}>5 years • Cat</Text>
//                             </View>
//                         </View>

//                         <View style={styles.petCard}>
//                             <Image style={styles.petImage} />
//                             <View style={styles.petInfo}>
//                                 <Text style={styles.petName}>Mila</Text>
//                                 <Text style={styles.petMeta}>2 years • Dog</Text>
//                             </View>
//                         </View>

//                         <View style={styles.petCard}>
//                             <Image style={styles.petImage} />
//                             <View style={styles.petInfo}>
//                                 <Text style={styles.petName}>Lili</Text>
//                                 <Text style={styles.petMeta}>5 years • Cat</Text>
//                             </View>
//                         </View>
//                     </View> */}
//                 </View>

//             </View>
//         </View>
//     );
// }


import { View, Text, Image, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/HomeScreen.styles";
import { colors } from "../styles/theme";
import { PETS } from "../data/pets";
import PetCard from "../components/PetCard";

export default function HomeScreen({ navigation }) {
    const listHeader = (
        <>
            <View style={styles.topRow}>
                <View>
                    <Text style={styles.greeting}>Hello</Text>
                    <Text style={styles.subtitle}>
                        Let's find a pet a home ❤️
                    </Text>
                </View>

                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbgSKawqZV9F79Dw-_OLguSkCHbhtgzgdkCmotkROug&s=10"
                    }}
                    style={styles.avatar}
                />
            </View>

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

            {/* <View style={styles.categoryRow}>
                <View style={[styles.categoryChip, styles.categoryChipActive]}>
                    <Text style={[styles.categoryText, styles.categoryTextActive]}>
                        All
                    </Text>
                </View>

                <View style={styles.categoryChip}>
                    <Text style={styles.categoryText}>Dogs</Text>
                </View>

                <View style={styles.categoryChip}>
                    <Text style={styles.categoryText}>Cats</Text>
                </View>

                <View style={styles.categoryChip}>
                    <Text style={styles.categoryText}>Other</Text>
                </View>
            </View> */}

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
        </>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={PETS}
                numColumns={2}
                renderItem={({ item }) => (
                    <PetCard
                        pet={item}
                        onPress={() =>
                            navigation.navigate("PetStack", {
                                screen: "PetDetails",
                                params: { petId: item.id },
                            })
                        }
                    />
                )}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={listHeader}
                columnWrapperStyle={styles.petRow}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

