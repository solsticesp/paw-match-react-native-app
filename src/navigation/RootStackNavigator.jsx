import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import PetStackNavigator from './PetStackNavigator';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="MainTabs"
                component={MainTabNavigator}
            />

            <Stack.Screen
                name="PetStack"
                component={PetStackNavigator}
            />
        </Stack.Navigator>
    );
}