// import { useEffect, useState } from 'react';
// import { UserContext } from './UserContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { authApi } from '../../api';
// import { Alert } from 'react-native';

// export default function UserProvider({
//     children,
// }) {
//     const [state, setState] = useState(null);

//     useEffect(() => {
//         loadUser();
//     }, []);

//     const register = async (email, password, firstName, lastName) => {

//         try {
//             const result = await authApi.register(email, password, firstName, lastName);

//             setState(result.user);
//         } catch (error) {
//             Alert.alert('Register failed: ', error.message);

//             throw error;
//         }
//     }

//     const login = async (email, password) => {

//         try {
//             const result = await authApi.login(email, password);

//             setState(result.user);
//         } catch (error) {
//             Alert.alert('Login failed: ', error.message);

//             throw error;
//         }
//     }

//     const saveUser = async (userData) => {
//         try {
//             await AsyncStorage.setItem('user', JSON.stringify(userData));

//             setState(userData);
//         } catch (error) {
//             console.error('Failed to save user data to AsyncStorage', error);
//         }
//     }

//     const loadUser = async () => {
//         try {
//             const userDataString = await AsyncStorage.getItem('user');

//             if (userDataString) {
//                 const userData = JSON.parse(userDataString);
//                 setState(userData);
//             }
//         } catch (error) {
//             console.error('Failed to load user data from AsyncStorage', error);
//         }
//     }

//     const logout = () => {
//         saveUser(null);
//     };

//     const contextData = {
//         isAuthenticated: !!state,
//         user: state,
//         login,
//         register,
//         logout,
//     }

//     return (
//         <UserContext.Provider value={contextData}>
//             {children}
//         </UserContext.Provider>
//     );
// }


import { useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authApi } from '../../api';
import { Alert } from 'react-native';

export default function UserProvider({ children }) {
    const [state, setState] = useState(null);

    useEffect(() => {
        loadUser();
    }, []);

    const register = async (email, password, firstName, lastName) => {
        try {
            const result = await authApi.register(
                email,
                password,
                firstName,
                lastName
            );

            await saveUser(result.user);
            return result;
        } catch (error) {
            Alert.alert('Register failed', error.message);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const result = await authApi.login(email, password);

            await saveUser(result.user);
            return result;
        } catch (error) {
            Alert.alert('Login failed', error.message);
            throw error;
        }
    };

    const saveUser = async (userData) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setState(userData);
        } catch (error) {
            console.error('Failed to save user data:', error);
        }
    };

    const loadUser = async () => {
        try {
            const userDataString = await AsyncStorage.getItem('user');

            if (userDataString) {
                const userData = JSON.parse(userDataString);
                setState(userData);
            }
        } catch (error) {
            console.error('Failed to load user data:', error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setState(null);
        } catch (error) {
            console.error('Failed to log out:', error);
        }
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
