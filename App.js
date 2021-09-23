import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Screens

import MainScreen from './src/screens/Main';
import AppBar from './src/components/AppBar';
import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import NotificationScreen  from './src/screens/Notification';
import MessageScreen  from './src/screens/Message';
import Shop  from './src/screens/Shop';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRoutename="SplashScreen"
          screenOptions={{
            header: props => <AppBar {...props} />,
          }}
          
          >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="InitialLaunchScreen"
            component={InitialLaunchScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
          />

          <Stack.Screen
            name="Message"
            component={MessageScreen}
          />
          <Stack.Screen
            name="ShopScreen"
            component={Shop}
          />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
