import { createStackNavigator } from '@react-navigation/stack';
import SearchFiltersScreen from '../screens/SearchFiltersScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';

const Stack = createStackNavigator();

export default function PetStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={SearchFiltersScreen} />
            <Stack.Screen name="PetDetails" component={PetDetailsScreen} />
        </Stack.Navigator>
    );
}