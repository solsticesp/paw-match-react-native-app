import axios from 'axios';

const base = axios.create({
    baseURL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    headers: {
        'apikey': process.env.EXPO_PUBLIC_SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
    }
});

export const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
});

export const auth = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/auth/v1`
});

export const storage = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/storage/v1/object`
});

export const setAuthToken = (token) => {
    const clients = [api, auth, storage];
    
    clients.forEach((client) => {
        if (token) {
            client.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            delete client.defaults.headers.common.Authorization;
        }
    });
};