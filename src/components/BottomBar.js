import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeRoute = () => <Text>Home</Text>;

const SearchRoute = () => <Text>Search</Text>;

const AddRoute = () => <Text>Add New Post</Text>;

const ShopRoute = () => <Text>Shop</Text>;

const ProfileRoute = () => <Text>Profile</Text>;



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