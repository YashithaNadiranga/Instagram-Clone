import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../config/Colors';

export class InitialLaunchScreen extends Component {
  constructor(props) {
    super(props);
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
    this.props.navigation.goBack(null);
    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}></View>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.instaLogo}
            source={require('../assets/images/instagramLogo.png')}
          />

          <View style={styles.ButtonItemContainer}>
            <Button
              icon="facebook"
              labelStyle={{color: '#fff'}}
              contentStyle={{height: 45, paddingTop: 3}}
              color="#3897f0"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              <Text style={{fontSize: 16, color: 'white'}}>
                Login with Facebook
              </Text>
            </Button>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'gray'}}>
                OR
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
          </View>

          <View style={styles.ButtonItemContainer}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                padding: 20,
              }}
              onPress={() => {
                this.props.navigation.navigate('SignUpScreen');
              }}>
              <Text
                style={{fontSize: 14, color: '#3897f0'}}
                onPress={() => {
                  console.log('Press');
                }}
                onPress={() => {
                  this.props.navigation.navigate('SignUpScreen');
                }}>
                Sign Up with Email Address or Phone Number
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fbLogoContainer}>
          <View style={styles.bottomWrapper}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: 10,
              }}>
              <Text style={styles.from}>Already have an account? </Text>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('SignInScreen');
                }}>
                Log in
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 15,
  },
  fbLogoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '25%',
    marginBottom: 150,
    marginTop: 100,
  },
  bottomWrapper: {
    borderTopWidth: 0.5,
    borderColor: colors.gray,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  from: {
    textAlign: 'center',
    color: colors.gray,
  },
  ButtonItemContainer: {
    marginBottom: 10,
    width: '100%',
  },
  margins: {
    marginTop: 30,
  },
});
