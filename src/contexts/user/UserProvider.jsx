
import { UserContext } from './UserContext';
import { authApi } from '../../api';
import { Alert } from 'react-native';
import useSecureState from '../../hooks/useSecureState';

export default function UserProvider({ children }) {
    const [state, setState] = useSecureState('user', null);

    const register = async (email, password, firstName, lastName) => {
        try {
            const result = await authApi.register(
                email,
                password,
                firstName,
                lastName
            );

            setState(result.user);

            return result;
        } catch (error) {
            Alert.alert('Register failed', error.message);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const result = await authApi.login(email, password);

            setState(result.user);

            return result;
        } catch (error) {
            Alert.alert('Login failed', error.message);
            throw error;
        }
    };

    const logout = () => {
        setState(null);
    };

    const contextData = {
        isAuthenticated: !!state,
        user: state,
        login,
        register,
        logout,
    };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
}
