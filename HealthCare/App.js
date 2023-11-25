import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import { UserProvider } from './src/Context/UserContext';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <NavigationContainer>
      <UserProvider>
      <StatusBar style="light" backgroundColor="transparent"  />
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
}
