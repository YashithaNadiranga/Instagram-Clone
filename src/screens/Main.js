import React, { Component } from 'react';
import { StyleSheet,BackHandler, Text, View } from 'react-native';
import { Icon } from 'native-base';
import {  NativeBaseProvider } from "native-base";
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar';

export default class Main extends Component {
    componentDidMount() {
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }
    
      handleBackButtonClick = () => {
        this.props.navigation.navigate('MainScreen');
        // BackHandler.exitApp();
        return false;
        // this.props.navigation.navigate('MainScreen');
      };

    render() {
        return (
            <NativeBaseProvider>
              <BottomBar/>
            </NativeBaseProvider>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});