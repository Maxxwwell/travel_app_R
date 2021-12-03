/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Details from './screens/Details';
import { theme } from './components/theme';
import { ThemeProvider } from 'styled-components';
import Recommended_Details from './screens/Recommended_Details';



const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Recommended_Details" component={Recommended_Details} />
        </Stack.Navigator>

      </NavigationContainer>

    </ThemeProvider>

  );
};

export default App;
