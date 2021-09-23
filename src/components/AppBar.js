import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { color } from 'styled-system';


function AppBar ({navigation, previous}){
     
    return(
    <Appbar.Header  style={{backgroundColor:'transparent', boxShadow: 'none'}}>   
        {/* <Appbar.BackAction onPress={navigation.navigate('SignInScreen')} /> */}
        <Appbar.Content title="Instagram" titleStyle={{fontFamily:"insta", fontSize:30}}/>
        <Appbar.Action icon="heart-outline" onPress={() => {navigation.navigate('Notification')}} />
        <Appbar.Action icon={require('../assets/Icons/send.png')} onPress={()=>{navigation.navigate('Message')}} />
    </Appbar.Header>
    );
}
export default AppBar;
