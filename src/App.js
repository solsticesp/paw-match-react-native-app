import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </>
  );
}

