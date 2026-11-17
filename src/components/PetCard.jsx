import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { colors, radius } from "../styles/theme";

export default function PetCard({ pet, onPress }) {
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
        width: "48%",
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.border,
    },
    petImage: {
        width: "100%",
        height: 128,
        backgroundColor: colors.primaryLight,
    },
    petInfo: {
        backgroundColor: colors.surface,
        borderTopLeftRadius: radius.md,
        borderTopRightRadius: radius.md,
        padding: 15,
        marginTop: -15,
    },
    petName: {
        fontSize: 15,
        fontWeight: "800",
        color: colors.text,
    },
    petMeta: {
        color: colors.textMuted,
        fontSize: 12,
        marginTop: 4,
    },
})