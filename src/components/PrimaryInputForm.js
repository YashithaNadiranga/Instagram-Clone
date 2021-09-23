import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';

export class PrimaryInputForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {placeHolderText, secureTextEntry} = this.props;
    return (
      <View style={styles.container}>
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
            placeholder={placeHolderText}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    );
  }
}

export default PrimaryInputForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  inputContainer: {
    backgroundColor: colors.gray1,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
