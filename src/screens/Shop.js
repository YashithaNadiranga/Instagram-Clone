import React, {Component} from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

export default class Shop extends Component {
  constructor(props) {
    super(props);
  }
  signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        AsyncStorage.setItem('isLoggedIn','0');
        AsyncStorage.setItem('User','');
        this.props.navigation.navigate('SignInScreen');
      });
  };
  render() {
    return (
      <View>
        <Button
              icon=""
              labelStyle={{color: '#fff'}}
              contentStyle={{height: 45, paddingTop: 3}}
              color="#3897f0"
              mode="contained"
              onPress={() => {
                AsyncStorage.setItem('isLoggedIn','0');
                // this.props.navigation.navigate('SignInScreen');
                // <SignInScreen navigation = {this.props.navigation} />
                // window.location.reload(false);
                RNRestart.Restart();
                }}>
              <Text style={{fontSize: 16, color: 'white'}}>
                Sign Out
              </Text>
            </Button>
      </View>
    );
  }
}
