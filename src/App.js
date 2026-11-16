import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';
import AuthNavigator from './navigation/AuthNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        {true
          ? <AuthNavigator />
          : <MainTabNavigator />
        }
      </NavigationContainer>

    </>
  );
}

