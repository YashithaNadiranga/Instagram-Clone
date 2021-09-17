import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import {  NativeBaseProvider } from "native-base";
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar';

export default class Main extends Component {


    render() {
        return (
            <NativeBaseProvider>
              <AppBar/>
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