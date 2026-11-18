// import { Pressable, Text, FlatList } from "react-native";
// import styles from "../styles/MyPetsScreen";
// import { Ionicons } from "@expo/vector-icons";
// import { colors } from "../styles/theme";
// import PetCardHorizontal from "../components/PetCardHorizontal";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useEffect } from "react";

// const favList = [
//     {
//         id: 'a82f9d12-8b5c-4c7e-9f31-6a2d8e5b1041',
//         name: 'Oliver',
//         species: 'cat',
//         age: 4,
//         location: 'Veliko Tarnovo, Bulgaria',
//         imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
//     },
//     {
//         id: 'c91e7a23-4d6f-48b2-a135-7f9e2c6d5082',
//         name: 'Rocky',
//         species: 'dog',
//         age: 5,
//         location: 'Burgas, Bulgaria',
//         imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600',
//     },
//     {
//         id: 'f84d2b56-1c3e-4a97-b624-9d6f8e1c3054',
//         name: 'Simba',
//         species: 'cat',
//         age: 3,
//         location: 'Ruse, Bulgaria',
//         imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600',
//     },
// ]

// export default function MyPetsScreen() {

//     return (
//         <SafeAreaView
//             style={[{ flex: 1 }, styles.container]}
//             edges={["top"]}
//         >
// {/* 
//             <Text style={styles.title}>Favorites</Text> */}

//             {(favList.length > 0)
//                 ? (
//                     <FlatList
//                         data={favList}
//                         renderItem={({ item }) => (
//                             <PetCardHorizontal
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
//                         contentContainerStyle={styles.content}
//                     />
//                 )
//                 : (
//                     <Text>List Empty</Text>
//                 )
//             }

//         </SafeAreaView>
//     );
// }



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
import { colors } from "../styles/theme";
import MyPetCard from "../components/MyPetCard";


const MY_PETS = [
    {
        id: "1",
        name: "Max",
        age: 2,
        type: "Dog",
        breed: "Golden Retriever",
        status: "Available",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500",
    },
    {
        id: "2",
        name: "Luna",
        age: 1,
        type: "Cat",
        breed: "British Shorthair",
        status: "Available",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500",
    },
];

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
                                navigation.navigate("EditPet", {
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
