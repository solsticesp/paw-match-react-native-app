import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './navigation/AuthNavigator';
import { UserContext } from './contexts/user/UserContext';
import UserProvider from './contexts/user/UserProvider';
import RootStackNavigator from './navigation/RootStackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <UserProvider>
          <UserContext.Consumer>
            {({ isAuthenticated }) =>
              isAuthenticated
                ? <RootStackNavigator />
                : <AuthNavigator />
            }
          </UserContext.Consumer>
        </UserProvider>
      </NavigationContainer>

    </>
  );
}

