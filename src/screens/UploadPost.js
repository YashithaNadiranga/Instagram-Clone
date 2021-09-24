import { TextArea } from 'native-base'
import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import {Button, IconButton} from 'react-native-paper';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import PrimaryButton from '../components/PrimaryButton'
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RNRestart from 'react-native-restart';

export default class UploadPost extends Component {
    constructor(props){
        super(props);
        this.state= {
            pic: 'https://static.thenounproject.com/png/187803-200.png',
            picDate:'',
            text :'',
            displayname : auth().currentUser.displayName,
            propic : auth().currentUser.photoURL,
        }

        this.getPhotofromGalary = this.getPhotofromGalary.bind(this)
    }

    
    getPhotofromGalary = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            console.log(image.path);

            this.setState({
                pic : image.path,
                picDate : image.modificationDate
                
            });
          })
      }

      uploadImage = async()=>{
        try {
    
        const imagename = auth().currentUser.displayName + this.state.picDate;
        const reference = storage().ref(`photos/${imagename}`);
        await reference.putFile(this.state.pic);
        const url = await storage().ref(`photos/${imagename}`).getDownloadURL();
        console.log(url);

        if (url) {
            firestore()
              .collection('posts')
              .add({
                image: url,
                profile: this.state.propic,
                time: new Date().toISOString(),
                title: this.state.text,
                user: this.state.displayname,
                
                
              })
              .then(() => {
                console.log('added');
                RNRestart.Restart();
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            console.log('called');
            firestore()
              .collection('posts')
              .add({
                image: 'NO_IMAGE',
                title: "NO",
                user: 'test user',
                time: new Date().toISOString(),
                profile: 'text',
              })
              .then(() => {
                console.log('added');
              })
              .catch(error => {
                console.log(error);
              });
          }
    
        } catch (error) {
          console.log(error);
        }
        
      }


    render() {
        return (
            <View>
            <View>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>{
                        console.log("Image click");
                        this.getPhotofromGalary()

                }}>
                <Image 
                 style={{width:'100%', height:400}}
                 source={{uri:this.state.pic}}
                 
                />
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:15}}>
                <TextArea placeholder='What you Say?' style={{padding:20, fontSize:20, borderBottomWidth: 0, borderTopWidth:0}} />
            </View>
            <View style={{marginBottom:0, padding:30}}>
            <Button
                  labelStyle={{color: '#fff'}}
                  contentStyle={{height: 45, paddingTop: 3}}
                  color="#3897f0"
                  mode="contained"
                  onPress={
                    this.uploadImage
                    }>
                  <Text style={{fontSize: 16, color: 'white'}}>Upload</Text>
                </Button>
            </View>
            </View>
        )
    }
}
