import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postslist: [],
    };
  }

  componentDidMount() {
    const subscriber = firestore()
      .collection('posts')
      .onSnapshot(querySnapshot => {
        const posts = [];

        querySnapshot.forEach(documentSnapshot => {
          // console.log(documentSnapshot.data());

          posts.push({
            image: documentSnapshot.data().image,
            profile: documentSnapshot.data().profile,
            time: documentSnapshot.data().time,
            title: documentSnapshot.data().title,
            user: documentSnapshot.data().user,

            key: documentSnapshot.id,
          });
        });
        this.setState({
          postslist: posts,
        });

        console.log(this.state.postslist);
      });
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
