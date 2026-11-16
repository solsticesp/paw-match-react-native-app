import { useState } from 'react';
import { UserContext } from './UserContext';

export default function UserProvider({
    children,
}) {
    const [state, setState] = useState(null);

    const loginHandler = (email, password) => {
        setState({
            email,
            password,
        });
    };

    const logout = () => {
        setState(null);
    };

    const contextData = {
        isAuthenticated: !!state,
        user: state,
        login: loginHandler,
        logout,
    }

    return (
        <UserContext.Provider value={{ contextData }}>
            {children}
        </UserContext.Provider>
    );
}