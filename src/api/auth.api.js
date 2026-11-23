import { auth } from "./api";

export const register = async (email, password, firstName, lastName) => {
    const result = await auth.post('/signup', {
        email,
        password,
        data: {
            first_name: firstName,
            last_name: lastName
        }
    });

    if (result.status !== 200) {
        throw new Error("Failed to register!");
    }

    return result.data;
}

export const login = async (email, password) => {
    const result = await auth.post('/token?grant_type=password', {
        email,
        password,
    });

    if (result.status !== 200) {
        throw new Error("Failed to register!");
    }

    return result.data;
}