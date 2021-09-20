import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {colors} from '../config/Colors';
import PrimaryInputForm from '../components/PrimaryInputForm';
import {Icon} from 'native-base';

export class SignInScreen extends Component {
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.languageContainer}></View>
            <View style={styles.buttonsContainer}>
              <Image
                style={styles.instaLogo}
                source={require('../assets/images/instagramLogo.png')}
              />

              <View style={styles.ButtonItemContainer}>
                <PrimaryInputForm placeHolderText="Phone number, email address or username" />
              </View>

              <View style={styles.ButtonItemContainer}>
                <PrimaryInputForm
                  placeHolderText="Password"
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.ButtonItemContainer}>
                <Button
                  labelStyle={{color: '#fff'}}
                  contentStyle={{height: 45, paddingTop: 3}}
                  color="#3897f0"
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  <Text style={{fontSize: 16, color: 'white'}}>Log In</Text>
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
                <Button
                  labelStyle={{color: '#3897f0'}}
                  icon="facebook"
                  mode="text"
                  onPress={() => console.log('Pressed')}>
                  Log In With Facebook
                </Button>
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
                  <Text style={styles.from}>Don't have an account? </Text>
                  <Text onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}>Sign up.</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default SignInScreen;

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
    marginBottom: 100,
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
    marginBottom: 5,
    width: '100%',
  },
  margins: {
    marginTop: 30,
  },
});
