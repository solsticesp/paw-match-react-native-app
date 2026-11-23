import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from './contexts/user/UserContext';

import UserProvider from './contexts/user/UserProvider';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <UserProvider>
          <UserContext.Consumer>
            {({ isAuthenticated }) => (
              <RootNavigator isAuthenticated={isAuthenticated} />
            )}
          </UserContext.Consumer>
        </UserProvider>
      </NavigationContainer>

    </>
  );
}

