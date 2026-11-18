import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../styles/theme";

import HomeScreen from "../screens/HomeScreen";
import MyPetsScreen from "../screens/MyPetsScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";

import PetDetailsScreen from "../screens/PetDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ApplicationFormScreen from "../screens/ApplicationFormScreen";
import AddPetScreen from "../screens/AddPetScreen";
import SearchFiltersScreen from "../screens/SearchFiltersScreen";
// import ApplicationDetailsScreen from "../screens/ApplicationDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainTabs() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "MyPets") {
                        iconName = focused ? "paw" : "paw-outline";
                    } else if (route.name === "Applications") {
                        iconName = focused
                            ? "document-text"
                            : "document-text-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused
                            ? "person-circle"
                            : "person-circle-outline";
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={focused ? colors.primary : colors.textMuted}
                        />
                    );
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,

                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                    marginTop: spacing.xs,
                },

                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopColor: colors.border,
                    borderTopWidth: 1,
                    paddingTop: spacing.sm,
                    elevation: 0,
                },

                tabBarItemStyle: {
                    borderRadius: radius.md,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="MyPets" component={MyPetsScreen} />
            <Tab.Screen name="Applications" component={ApplicationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
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

            <Stack.Screen
                name="AddPet"
                component={AddPetScreen}
                options={{ title: "Add Pet" }}
            />

            <Stack.Screen
                name="BrowsePets"
                component={SearchFiltersScreen}
                options={{ title: "Find a Pet" }}
            />

            {/* <Stack.Screen
                name="ApplicationDetails"
                component={ApplicationDetailsScreen}
                options={{ title: "Application Details" }}
            /> */}

        </Stack.Navigator>
    );
}