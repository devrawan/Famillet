
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloScreen from './src/presentation/screens/HelloScreen';
import LoginScreen from './src/presentation/screens/LoginScreen';
import RegisterScreen from './src/presentation/screens/RegisterScreen';
import HomeScreen from './src/presentation/screens/HomeScreen';
import ReportScreen from './src/presentation/screens/ReportScreen';
const Stack = createNativeStackNavigator();
import Tabs from './src/routes/Tabs';
const App =() => {
 
 
  return (
    // <NavigationContainer>
    //   <Tabs/>
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="HelloScreen" component={HelloScreen} options={{headerShown:false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={Tabs} options={{headerShown:false}} />
      {/* <Stack.Screen name="ReportScreen" component={ReportScreen} options={{headerShown:false}} /> */}

    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
