import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity,KeyboardAvoidingView,Platform,TouchableWithoutFeedback
,Keyboard  } from 'react-native';
import {colors} from '../config/Colors';
import PhoneInputForm from '../components/PhoneInputForm';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryInputForm from '../components/PrimaryInputForm'

export class SignUpScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneEnabled: true,
    };
  }

  switchButton(val) {
    this.setState({isPhoneEnabled: val});
  }

  render() {
    const {isPhoneEnabled} = this.state;
    return (

        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
          <View style={{display: isPhoneEnabled ? 'flex': 'none'}}>
          <View style={styles.phoneNumberINputWrapper}>
            <PhoneInputForm />
          </View>
            <View style={styles.notificationWRapper}>
                <Text style={styles.notificationText}>
                    You may recieve SMS updates from instagram and can opt out at any
                    time.
                </Text>
             </View>
          </View>

          {/* Email Field */}

          <View style={{display: isPhoneEnabled ? 'none': 'flex'}}>
          <View style={styles.EmailINputWrapper}>
            <PrimaryInputForm  placeHolderText=' Enail address' />
            
          </View>
          </View>

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              label={'Next'}
              text={colors.secondary}
              buttonBg={colors.primary}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.login}>
            <Text style={styles.alreradyAccount}>Already have an account?</Text>{' '}
            <Text style={styles.logIn}>LogIn.</Text>
          </Text>
        </View>
      </View>
      
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen1;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20%',
  },
  avatar: {
    width: 150,
    height: 150,
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
  EmailINputWrapper :{
    margin: 20,
  }
});
