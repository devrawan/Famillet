
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import HelloScreen from './src/presentation/screens/HelloScreen';
import LoginScreen from './src/presentation/screens/LoginScreen';
import RegisterScreen from './src/presentation/screens/RegisterScreen';
import HomeScreen from './src/presentation/screens/HomeScreen';
const Stack = createNativeStackNavigator();
const App =() => {
 
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HelloScreen" component={HelloScreen} options={{headerShown:false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
