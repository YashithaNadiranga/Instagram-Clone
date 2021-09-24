import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import {colors} from '../config/Colors';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Shop extends Component {

  constructor(props){
    super(props);

    this.state={
      userlist: []
    }
  }

  componentDidMount() {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          // console.log(documentSnapshot.data());

          users.push({
            uid : documentSnapshot.data().uid,
            userPro: documentSnapshot.data().photo
          });
        });
        this.setState({
          userlist: users,
        });
        console.log(this.state.userlist);
      });
  }
  renderItem = users => {
    const useid = users.uid;
    return (
      <View style={{display : useid == auth().currentUser.displayName?'none': 'flex',}} >
      <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={{uri:users.userPro}}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}> {users.uid} </Text>
          </Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}> Follow </Text>
          </TouchableOpacity>
        </View>
        </View>
    )
  }

  render() {
    return (
      <View style={styles.container,{marginBottom:'38%'}}>
        <FlatList
          data={this.state.userlist}
          // keyExtractor={item => item.key}
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  headerWrapper: {
    display: 'flex',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  sectionedListWrapper: {
    display: 'flex',
    flex: 1,
    padding: 15,
  },
  promotionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  promotionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promotionsContentwrapper: {
    marginLeft: 10,
  },
  sectionedItemWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin:15
  },
  notificationImage: {
    height: 50,
    width: 50,
    borderRadius: 70,
  },
  notificationContentWrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: 15,
  },
  userNames: {
    fontWeight: 'bold',
  },
  duration: {
    color: colors.gray,
  },
  followButton: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
  },
  followButtonText: {
    color: colors.secondary,
    padding: 5,
  }
});

