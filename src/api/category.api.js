import api from './api';

export async function getAll() {
    const response = await api.get('/categories?select=id,name');

    return response.data;
}