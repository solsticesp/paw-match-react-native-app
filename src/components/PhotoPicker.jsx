import {
    View,
    Text,
    Pressable,
    Image,
    Alert,
    StyleSheet,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { colors, radius, spacing } from "../styles/theme";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PhotoPicker({
    onImageSelected,
}) {
    const [imageUri, setImageUri] = useState(null);

    const chooseFromGalleryHandler = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                "Permission required",
                "Permission to access the media library is required."
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return;
        }

        const uri = result.assets[0].uri;

        setImageUri(uri);
        onImageSelected(uri);
    };

    const takePhotoHandler = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                'Permission required',
                'Permission to access the camera is required.'
            );
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return;
        }

        const uri = result.assets[0].uri;

        setImageUri(uri);
        onImageSelected(uri);
    }

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Pet Photo</Text>

            <View style={styles.imageUpload}>
                {imageUri ? (
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.petImage}
                        resizeMode="cover"
                    />
                ) : (
                    <>
                        <Ionicons
                            name="cloud-upload-outline"
                            size={36}
                            color={colors.primaryDark}
                        />

                        <Text style={styles.uploadTitle}>
                            Upload a pet photo
                        </Text>

                        <Text style={styles.uploadSubtitle}>
                            Choose from gallery or take a photo
                        </Text>
                    </>
                )}
            </View>

            <View style={styles.imageButtons}>
                <Pressable style={styles.imageButton} onPress={chooseFromGalleryHandler}>
                    <Ionicons name="images-outline" size={20} color={colors.primaryDark} />
                    <Text style={styles.imageButtonText}>Gallery</Text>
                </Pressable>

                <Pressable style={styles.imageButton} onPress={takePhotoHandler}>
                    <Ionicons name="camera-outline" size={20} color={colors.primaryDark} />
                    <Text style={styles.imageButtonText}>Camera</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: spacing.md,
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.text,
        marginBottom: spacing.sm,
    },
    imageUpload: {
        height: 230,
        backgroundColor: colors.primaryLight,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: spacing.lg,
        overflow: "hidden",
    },

    uploadTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.primaryDark,
        marginTop: spacing.sm,
    },

    uploadSubtitle: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: spacing.xs,
    },

    petImage: {
        width: "100%",
        height: "100%",
    },

    imageButtons: {
        flexDirection: "row",
        gap: spacing.md,
    },

    imageButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.sm,
        paddingVertical: spacing.md,
        backgroundColor: colors.primaryLight,
        borderRadius: radius.md,
    },

    imageButtonText: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.primaryDark,
    },
})
