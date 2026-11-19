import api from './api';

export async function getAll() {
    const response = await api.get('/pets?select=*,categories(name)');

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
    const response = await api.delete(`/pets?id=eq.${id}`);

    return response.data;
}