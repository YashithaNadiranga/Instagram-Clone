import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Stories from '../components/Stories';
import {colors} from '../config/Colors';
import Feed from '../components/Feed';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.storiesWrapper}>
          <Stories />
        </View>

        <ScrollView style={styles.feedContainer}>
          <Feed />
        </ScrollView>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  storiesWrapper: {
    backgroundColor: colors.gray1,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  feedContainer: {
    display: 'flex',
  }
});
