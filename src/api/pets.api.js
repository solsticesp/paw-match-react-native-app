import { api, storage } from './api';
import * as FileSystem from "expo-file-system/legacy";
import { decode } from "base64-arraybuffer";

export async function getAll() {
    const response = await api.get('/pets?select=*,categories(name)&order=created_at.desc');

    return response.data;
}

export async function getById(id) {
    const response = await api.get(
        `/pets?id=eq.${id}&select=*,categories(name)`
    );

    return response.data[0];
}

export async function getFeatured() {
    const response = await api.get(
        '/pets?select=*,categories(name)&status=eq.Available&order=created_at.desc&limit=6'
    );

    return response.data;
}

export async function addPet(petData) {
    const response = await api.post('/pets', petData);

    return response.data;
}

export async function updatePet(id, petData) {
    const response = await api.patch(
        `/pets?id=eq.${id}`,
        petData
    );

    return response.data;
}

export async function deletePet(id) {
    try {
        const pet = await getById(id);

        if (pet?.image_url) {
            const fileName = pet.image_url.split('/').pop();

            await storage.delete(`/pets/${fileName}`);
        }

        const response = await api.delete(`/pets?id=eq.${id}`);

        return response.data;

    } catch (error) {
        console.log(
            "Delete pet error:",
            error.response?.data || error.message
        );

        throw error;
    }
}

export async function saveImage(imageUri) {
    try {
        const extension = imageUri
            .split("?")[0]
            .split(".")
            .pop()
            .toLowerCase();

        const mimeTypes = {
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            webp: "image/webp",
        };

        const contentType = mimeTypes[extension] || "image/jpeg";

        const base64 = await FileSystem.readAsStringAsync(imageUri, {
            encoding: FileSystem.EncodingType.Base64,
        });

        const fileData = decode(base64);

        const fileName = `${Date.now()}.${extension}`;

        await storage.post(`/pets/${fileName}`, fileData, {
            headers: {
                "Content-Type": contentType,
                "x-upsert": "false",
            },
        });

        const publicUrl =
            `${storage.defaults.baseURL}/public/pets/${fileName}`;

        return publicUrl;

    } catch (error) {
        console.log(
            "Image upload error:",
            error.response?.data || error.message
        );

        throw error;
    }
}

