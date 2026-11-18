import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, spacing, radius } from "../styles/theme";


export default function MyPetCard({ pet, onEdit, onDelete }) {
    return (
        <View style={styles.petCard}>
            <Image
                source={{ uri: pet.image_url }}
                style={styles.petImage}
                resizeMode="cover"
            />

            <View style={styles.petInfo}>
                <View style={styles.petHeader}>
                    <Text style={styles.petName}>{pet.name}</Text>

                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>
                            {pet.status}
                        </Text>
                    </View>
                </View>

                <Text style={styles.petMeta}>
                    {pet.age} {pet.age === 1 ? 'year' : 'years'} • {pet.categories?.name} • {pet.location}
                </Text>

                <View style={styles.cardActions}>
                    <Pressable
                        style={styles.editButton}
                        onPress={() => onEdit(pet.id)}
                    >
                        <Ionicons
                            name="create-outline"
                            size={16}
                            color="#58745A"
                        />
                        <Text style={styles.editButtonText}>Edit</Text>
                    </Pressable>

                    <Pressable
                        style={styles.deleteButton}
                        onPress={() => onDelete(pet.id)}
                    >
                        <Ionicons
                            name="trash-outline"
                            size={18}
                            color={colors.danger}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    petCard: {
        flexDirection: "row",
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        padding: spacing.sm,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: "hidden",
    },
    petImage: {
        width: 112,
        height: 140,
        borderRadius: radius.md,
        backgroundColor: colors.primaryLight,
    },
    petInfo: {
        flex: 1,
        paddingLeft: spacing.md,
        paddingVertical: spacing.xs,
        justifyContent: "space-between",
    },
    petHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: spacing.xs,
    },
    petName: {
        fontSize: 17,
        fontWeight: "800",
        color: colors.text,
    },
    statusBadge: {
        backgroundColor: colors.success,
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: radius.pill,
    },
    statusText: {
        fontSize: 10,
        fontWeight: "700",
        color: colors.primaryDark,
    },
    petMeta: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },
    petBreed: {
        fontSize: 12,
        color: colors.text,
        fontWeight: "600",
        marginTop: spacing.xs,
    },
    cardActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: spacing.sm,
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs,
        backgroundColor: colors.primaryLight,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: radius.pill,
    },
    editButtonText: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.primaryDark,
    },
    deleteButton: {
        width: 38,
        height: 38,
        borderRadius: radius.md,
        backgroundColor: "#FCEBE9",
        alignItems: "center",
        justifyContent: "center",
    },
});