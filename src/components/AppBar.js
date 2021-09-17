import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { color } from 'styled-system';

const AppBar = () => (
    <Appbar.Header  style={{backgroundColor:'transparent', boxShadow: 'none'}}>   
        <Appbar.Content title="Instagram" titleStyle={{fontFamily:"insta", fontSize:30}}/>
        <Appbar.Action icon="heart-outline" onPress={() => {}} />
        <Appbar.Action icon={require('../assets/Icons/send.png')} onPress={() => console.log("Hello")} />
    </Appbar.Header>
);

export default AppBar;
