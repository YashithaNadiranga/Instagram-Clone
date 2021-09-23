import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, IconButton} from 'react-native-paper';
import {colors} from '../config/Colors';
import PrimaryInputForm from '../components/PrimaryInputForm';
import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '612061315562-euggnkh3akekkm8heq0c4mdusr43qe60.apps.googleusercontent.com',
// });


export class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
    };

    this.login = this.login.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    // this.onGoogleButtonPress = this.onGoogleButtonPress.bind(this);
  }
  
    // onGoogleButtonPress = async()=> {

    //   // try {
    //   // Get the users ID token
    //   const { idToken } = await GoogleSignin.signIn();
    
    //   // Create a Google credential with the token
    //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    //   // Sign-in the user with the credential
    //   return auth().signInWithCredential(googleCredential);
    // // } catch (error) {
    // //   console.log(error);
    // // }
    // }
  
  

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
    this.props.navigation.navigate('InitialLaunchScreen');
    return true;
  };

  login = async() =>{
    try {
      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.pass)
        .then((res) => {
          console.log(res.user.displayName);
          AsyncStorage.setItem('isLoggedIn','1');
          AsyncStorage.setItem('User', res.user.displayName);
          this.props.navigation.navigate('MainScreen');
        });
    } catch (error) {
      console.log(error);
    }
  }

  checkValidation =()=>{

    if(this.state.email.length==0){
      Alert.alert('Validation Error','Please Enter valid Email Address')
    }else if(this.state.pass.length==0){
      Alert.alert('Validation Error','Please Enter valid Password')
    }else{
      this.login();
      console.log(this.state.email +''+this.state.pass);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.languageContainer}></View>
            <View style={styles.buttonsContainer}>
              <Image
                style={styles.instaLogo}
                source={require('../assets/images/instagramLogo.png')}
              />

              <View style={styles.ButtonItemContainer}>
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
                    placeholder="Phone number, email address or username"
                    value={this.state.email}
                    autoCapitalize='none'
                    autoCompleteType='email'
                    onChangeText={value => {
                      this.setState({email: value});
                    }}
                  />
                </View>
              </View>

              <View style={styles.ButtonItemContainer}>
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
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.pass}
                    onChangeText={value => {
                      this.setState({pass: value});
                    }}
                  />
                </View>
              </View>

              <View style={styles.ButtonItemContainer}>
                <Button
                  labelStyle={{color: '#fff'}}
                  contentStyle={{height: 45, paddingTop: 3}}
                  color="#3897f0"
                  mode="contained"
                  onPress={
                    this.checkValidation
                    }>
                  <Text style={{fontSize: 16, color: 'white'}}>Log In</Text>
                </Button>
              </View>

              {/* <View
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
              </View> */}

              {/* <View style={styles.ButtonItemContainer}>
                <GoogleSigninButton
                  style={{width: '100%', height: 48}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                  // disabled={this.state.isSigninInProgress}
                  onPress={() => this.onGoogleButtonPress().then(() => {
                    console.log('Signed in with Google!');
                    this.props.navigation.navigate('MainScreen')
                  
                  })}
                />
              </View> */}
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
                  <Text
                    onPress={() => {
                      this.props.navigation.navigate('SignUpScreen');
                    }}>
                    Sign up.
                  </Text>
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
    // borderTopWidth: 0.5,
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
