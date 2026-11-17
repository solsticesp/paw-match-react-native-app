import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MyPetsScreen from "../screens/MyPetsScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";

import PetDetailsScreen from "../screens/PetDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ApplicationFormScreen from "../screens/ApplicationFormScreen";
// import AddPetScreen from "../screens/AddPetScreen";
// import EditPetScreen from "../screens/EditPetScreen";
// import ApplicationDetailsScreen from "../screens/ApplicationDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainTabs() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="MyPets"
                component={MyPetsScreen}
            />

            <Tab.Screen
                name="Applications"
                component={ApplicationsScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}


export default function MainTabNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="Tabs"
                component={MainTabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PetDetails"
                component={PetDetailsScreen}
                options={{ title: "Pet Details" }}
            />

            <Stack.Screen
                name="ApplicationForm"
                component={ApplicationFormScreen}
                options={{ title: "Adoption Application" }}
            />

            {/* <Stack.Screen
                name="AddPet"
                component={AddPetScreen}
                options={{ title: "Add Pet" }}
            /> */}

            {/* <Stack.Screen
                name="EditPet"
                component={EditPetScreen}
                options={{ title: "Edit Pet" }}
            /> */}

            {/* <Stack.Screen
                name="ApplicationDetails"
                component={ApplicationDetailsScreen}
                options={{ title: "Application Details" }}
            /> */}

        </Stack.Navigator>
    );
}