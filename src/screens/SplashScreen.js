import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SplashScreen extends Component {

  constructor(props){
    super(props);
    setTimeout(()=>{
      this.isLoggedIn();
    }, 3000)
  }

  isLoggedIn = async()=>{
    const log = await AsyncStorage.getItem('isLoggedIn');
    console.log(log);
    if(log==='1'){
      this.props.navigation.navigate('MainScreen');
    }else{
      this.props.navigation.navigate("InitialLaunchScreen")
    }

  }



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
    BackHandler.exitApp();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../assets/images/icon.png')}
          />
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.from}>from</Text>
          <View style={styles.logoTextWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/images/facebookTextLogo.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 30,
  },
  logoTextWrapper: {
    width: '100%',
    height: '10%',
  },
  icon: {
    width: 100,
    height: 100,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: "100%",
    width: "30%",
  },
  from: {
    color: 'gray',
    marginBottom: 1,
    textAlign: 'center',
  },
});
