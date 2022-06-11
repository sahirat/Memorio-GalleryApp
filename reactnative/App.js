import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome To My Life Memories 🔔' }}
        />
        <Stack.Screen name="Memorio" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export  default App;