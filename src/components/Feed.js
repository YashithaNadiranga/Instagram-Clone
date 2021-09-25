import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {colors} from '../config/Colors';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class Feed extends Component {
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
            feedimage: documentSnapshot.data().image,
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

  renderItem = post => {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerLeftWrapper}>
            <Image
              style={styles.profileThumb}
              source={{uri:post.profile}}
            />
            <Text style={styles.headerTitle}> {post.user}</Text>
            
          </View>
          <Image
            style={styles.icon}
            source={require('../assets/images/dots.jpg')}
          />
        </View>
        <View>
        <Text style={{marginLeft:60,marginTop: -25,marginBottom:15}}> {post.time}</Text>
          <Image
            style={styles.feedImage}
            // source={require('../assets/images/feedImage.jpg')}
            source={{uri:post.feedimage}}
          />
        </View>
        <View style={styles.feedImageFooter}>
          <View style={styles.feddimageFooterLeftWrapper}>
            <Image
              style={styles.icon}
              source={require('../assets/images/heartfeed.jpg')}
            />
            <Image
              style={styles.icon}
              source={require('../assets/images/comment.png')}
            />
            <Image
              style={styles.icon}
              source={require('../assets/images/messagefeed.png')}
            />
          </View>
          <Image
            style={styles.icon}
            source={require('../assets/images/bookmarkfeed.png')}
          />
        </View>
        <View style={styles.underLineWRapper}>
          <View style={styles.underLine} />
        </View>
        <View style={styles.likesAndCommentsWrapper}>
          {/* <Image
          style={styles.likesImage}
          source={require('../assets/images/heart.png')}
        /> */}
          <Text style={styles.likesTitle}> 0 Likes</Text>
        </View>

        <View>
          <Text style={{paddingLeft: 15, marginTop: -15, marginBottom: 20}}>
            {' '}
            <Text style={styles.headerTitle}>{post.user}</Text>{' '}
            <Text style={styles.likesTitle2}> {post.title} </Text>
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (

      <View style={styles.container,{marginBottom:'38%'}}>
        <FlatList
          data={this.state.postslist}
          keyExtractor={item => item.key}
          renderItem={({item}) => 
            this.renderItem(item)}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width:'100%'
  },
  profileThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
    opacity: 0.5,
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  feedImage: {
    width: '100%',
    height: 350
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
  },
  underLine: {
    height: 1,
    backgroundColor: colors.gray1,
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: 'row',
    padding: 15,
  },
  likesTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  likesTitle2: {
    fontSize: 17,
    fontWeight: '400',
  },
});
