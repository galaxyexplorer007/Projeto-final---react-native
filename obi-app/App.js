import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Logo = require('./assets/logo.png'); // imagem da logo (planeta com anel)
const SolarSystem = require('./assets/solar_system.png'); // imagem do sistema solar estilizado

function SplashScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => navigation.navigate('Welcome'), 2000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.star}>✦</Text>
    </View>
  );
}

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcomeContainer}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.star}>✦</Text>
      <Text style={styles.appName}>OBI</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SolarSystem')} style={styles.arrowButton}>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>
    </View>
  );
}

function SolarSystemScreen() {
  return (
    <ScrollView contentContainerStyle={styles.solarSystemContainer}>
      <Text style={styles.title}>SISTEMA SOLAR</Text>
      <Image source={SolarSystem} style={styles.solarImage} />
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SolarSystem" component={SolarSystemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#0B0C2A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#0B0C2A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  star: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10
  },
  appName: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },
  arrowButton: {
    marginTop: 20
  },
  arrow: {
    color: 'white',
    fontSize: 24
  },
  solarSystemContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0C2A'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'serif'
  },
  solarImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain'
  }
});
