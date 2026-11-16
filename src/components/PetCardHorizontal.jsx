import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { colors, radius } from "../styles/theme";

export default function PetCardHorizontal({ pet, onPress }) {
    return (
        <Pressable style={styles.petCard} onPress={onPress}>
            <Image
                source={{ uri: pet.imageUrl }}
                style={styles.petImage}
                resizeMode="cover"
            />

            <View style={styles.petInfo}>
                <Text style={styles.petName}>{pet.name}</Text>
                <Text style={styles.petMeta}>
                    {pet.age} {pet.age === 1 ? 'year' : 'years'} • {pet.species}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    petCard: {
        flexDirection: "row",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: 10,
        marginTop: 12,
        alignItems: "center",
    },
    petImage: {
        width: 68,
        height: 68,
        borderRadius: radius.sm,
        backgroundColor: colors.primaryLight,
    },
    petInfo: {
        marginLeft: 12,
    },
    petName: {
        color: colors.text,
        fontWeight: "800",
        fontSize: 15,
    },
    petMeta: {
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 4,
    },
})