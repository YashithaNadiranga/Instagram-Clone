import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.storiesHeaderWrapper}>
          <Text style={styles.storiesHeaderText}>Stories</Text>
          <Text style={styles.storiesHeaderText}>Watch All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.myStoryImageWrapper}>
            <Image
              style={styles.myStoryImage}
              source={require('../assets/images/profilePage/yashitha.jpg')}
            />
            <Text style={styles.profileName}>Yashitha</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/profilePage/shamal.jpeg')}
            />
            <Text style={styles.profileName}>MAD_SHA</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storieslivecircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/profilePage/dila.jpeg')}
            />
            <Text style={styles.profileName}>Dila_2000</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/profilePage/sachin.jpeg')}
            />
            <Text style={styles.profileName}>Sachin</Text>
          </View>

          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/profilePage/sahan.jpeg')}
            />
            <Text style={styles.profileName}>Sahan</Text>
          </View>

          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/feanix.jpg')}
            />
            <Text style={styles.profileName}>Feanix Labs</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Stories;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storiesHeaderText: {
    fontSize: 17,
    fontWeight: '700',
  },
  myStoryImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5
  },
  myStoryImageWrapper: {
    padding: 10,
  },
  otherStories: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 12,
  },
  storyRound: {
    width: 75,
    height: 75,
  },
  otherStoryImageWrapper: {},
  profileName: {
    fontSize: 16,
    textAlign: 'center',
  },
});
