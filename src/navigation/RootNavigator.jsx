import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

export default function RootNavigator({ isAuthenticated }) {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {!isAuthenticated ? (
                <>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="MainTabs"
                        component={MainTabNavigator}
                    />
                </>
            )}

        </Stack.Navigator>
    );
}