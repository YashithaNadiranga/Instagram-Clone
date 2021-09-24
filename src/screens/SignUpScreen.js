import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
  TextInput,
} from 'react-native';
import {colors} from '../config/Colors';
import PhoneInputForm from '../components/PhoneInputForm';
import PrimaryInputForm from '../components/PrimaryInputForm';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneEnabled: true,
      email: '',
      pass: '',
      displayName:'',
      photo:'https://i.stack.imgur.com/34AD2.jpg'
    };

    this.signUp = this.signUp.bind(this);
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
    return true;
  };

  switchButton(val) {
    this.setState({isPhoneEnabled: val});
  };

  signUp =()=>{
    auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.pass)
    .then((createdUser) => {

      createdUser.user.updateProfile({
        displayName : this.state.displayName,
        photoURL: this.state.photo
      })

      firestore()
          .collection('users')
          .add({
            uid : this.state.displayName,
            photo: this.state.photo
          })



      this.props.navigation.navigate('SignInScreen');

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }

  render() {
    const {isPhoneEnabled} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={styles.avatarWrapper}>
                <Image
                  style={styles.avatar}
                  source={require('../assets/images/avatar.png')}
                />
              </View>
              <View style={styles.switchTitleWrapper}>
                <TouchableOpacity
                  onPress={() => this.switchButton(true)}
                  style={[
                    styles.titleSwitch,
                    {
                      borderBottomColor: isPhoneEnabled
                        ? colors.black
                        : colors.gray,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.title,
                      {color: isPhoneEnabled ? colors.black : colors.gray},
                    ]}>
                    PHONE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.switchButton(false)}
                  style={[
                    styles.titleSwitch,
                    {
                      borderBottomColor: isPhoneEnabled
                        ? colors.gray
                        : colors.black,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.title,
                      {color: isPhoneEnabled ? colors.gray : colors.black},
                    ]}>
                    EMAIL
                  </Text>
                </TouchableOpacity>
              </View>

              {/* phone field */}
              <View style={{display: isPhoneEnabled ? 'flex' : 'none'}}>
                <View style={styles.phoneNumberINputWrapper}>
                  <PhoneInputForm />
                </View>
                <View style={styles.notificationWRapper}>
                  <Text style={styles.notificationText}>
                    You may recieve SMS updates from instagram and can opt out
                    at any time.
                  </Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <Button
                    labelStyle={{color: '#fff'}}
                    contentStyle={{height: 45, paddingTop: 3}}
                    color="#3897f0"
                    mode="contained"
                    onPress={() => {
                      this.props.navigation.navigate('MainScreen');
                    }}>
                    <Text style={{fontSize: 12, color: 'white'}}>Next</Text>
                  </Button>
                </View>
              </View>

              {/* Email Field */}

              <View style={{display: isPhoneEnabled ? 'none' : 'flex'}}>
                <View style={styles.EmailINputWrapper}>
                  <View
                    style={{
                      backgroundColor: colors.gray1,
                      borderWidth: 0.5,
                      borderColor: colors.gray,
                      borderRadius: 5,
                      paddingLeft: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <TextInput 
                    placeholder="Email" 
                    value={this.state.email}
                    autoCapitalize='none'
                    autoCompleteType='email'
                    onChangeText={(value)=>{this.setState({email:value})}}
                    
                    />
                  </View>
                  
                  <View
                    style={{
                      backgroundColor: colors.gray1,
                      borderWidth: 0.5,
                      borderColor: colors.gray,
                      borderRadius: 5,
                      paddingLeft: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <TextInput placeholder="Password" secureTextEntry={true} 
                    value={this.state.pass}
                    onChangeText={(value)=>{this.setState({pass:value})}}
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: colors.gray1,
                      borderWidth: 0.5,
                      borderColor: colors.gray,
                      borderRadius: 5,
                      paddingLeft: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <TextInput placeholder="Display Name"
                    value={this.state.displayName}
                    onChangeText={(value)=>{this.setState({displayName:value})}}
                    />
                  </View>
                  
                </View>
                <View style={styles.buttonWrapper}>
                  <Button
                    labelStyle={{color: '#fff'}}
                    contentStyle={{height: 45, paddingTop: 3}}
                    color="#3897f0"
                    mode="contained"
                    onPress={() => {
                      this.signUp();
                    }}>
                    <Text style={{fontSize: 12, color: 'white'}}>Sign UP</Text>
                  </Button>
                </View>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={styles.login}>
                <Text style={styles.alreradyAccount}>
                  Already have an account?
                </Text>{' '}
                <Text
                  style={styles.logIn}
                  onPress={() => {
                    this.props.navigation.navigate('SignInScreen');
                  }}>
                  LogIn.
                </Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  switchTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 30,
    marginTop: 30,
  },
  titleSwitch: {
    display: 'flex',
    flex: 1,

    borderBottomWidth: 2,
  },
  title: {
    textAlign: 'center',
    padding: 15,
    fontWeight: '700',
  },
  phoneNumberINputWrapper: {
    display: 'flex',
    margin: 30,
  },
  notificationWRapper: {
    padding: 30,
    paddingTop: 10,
  },
  notificationText: {
    color: colors.gray,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  topContainer: {
    display: 'flex',
    flex: 1,
  },
  bottomContainer: {
    padding: 15,
  },
  login: {
    textAlign: 'center',
  },
  alreradyAccount: {
    color: colors.gray,
  },
  logIn: {
    fontWeight: '700',
  },
  EmailINputWrapper: {
    margin: 20,
  },
});
