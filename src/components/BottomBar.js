import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import AddScreen, { AddNewPost } from '../screens/AddNewPost';
import ShopScreen from '../screens/Shop';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadPost';


const HomeRoute = () => <HomeScreen />;

const SearchRoute = () => <SearchScreen />;

const AddRoute = () => <UploadScreen />;

const ShopRoute = () => <ShopScreen />;

const ProfileRoute = () => <ProfileScreen />;



const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home'},
    { key: 'search', title: 'Search', icon : (props)=> <Ionicons {...props} name='search-outline'/>},
    { key: 'add', title: 'NewPost', icon : (props)=> <FontAwesome {...props} name='plus-square-o'/> },
    { key: 'shop', title: 'Shop', icon : (props)=> <MaterialCommunityIcons {...props} name='shopping-outline'/> },
    { key: 'profile', title: 'Profile', icon : (props)=> <FontAwesome {...props} name='user-circle-o'/> },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    add: AddRoute,
    shop: ShopRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: 'white'}}
    />
  );
};

export default BottomBar;