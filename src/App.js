import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { UserContext } from './contexts/user/UserContext';
import UserProvider from './contexts/user/UserProvider';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <UserProvider>
          <UserContext.Consumer>
            {({ isAuthenticated }) =>
              isAuthenticated
                ? <MainTabNavigator />
                : <AuthNavigator />
            }
          </UserContext.Consumer>
        </UserProvider>
      </NavigationContainer>

    </>
  );
}

