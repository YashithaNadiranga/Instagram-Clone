import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BottomBar from '../components/BottomBar';
import {  NativeBaseProvider } from "native-base";
import { Button } from 'react-native-paper';

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text style={style.title}>Login</Text>
                <Button icon="camera" mode="contained" onPress={() => {this.props.navigation.navigate('Main')}}>
                    Press me
                </Button>
            </View>
            
            
            
        )
    }
}

const style = StyleSheet.create({
    title:{
        fontSize: 40,
        textAlign: 'center'
    }
});
