import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens

import LoginScreen from './src/screens/Login';
import MainScreen from './src/screens/Main';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRoutename="Home" screenOptions={{ headerShown: false }}>

        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Home" component={MainScreen}/>

      </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

