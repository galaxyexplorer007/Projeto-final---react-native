
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import PlanetScreen from './screens/PlanetScreen';
import DwarfPlanetsScreen from './screens/DwarfPlanetsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planet" component={PlanetScreen} />
        <Stack.Screen name="Dwarfs" component={DwarfPlanetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
