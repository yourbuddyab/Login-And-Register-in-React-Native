import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import DetailScreen from './Detail';
import ProfileScreen from './Profile';
import ExploreScreen from './Explore';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Feed"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor:'#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={DetailStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor:'#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor:'#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor:'#d02860',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
);


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
         headerStyle:{
           backgroundColor: '#009387'
         }, 
         headerTintColor:'#fff',
         headerTitleStyle:{
           fontWeight:'bold'
         }
     }}>
       <HomeStack.Screen name="Home" component={HomeScreen} options={{
         headerLeft: () => (
           <Icon.Button name="ios-menu" size={25}
           backgroundColor ='#009387' onPress={() => navigation.openDrawer()}>
           </Icon.Button>
         )
       }}/>
       <HomeStack.Screen name="Detail" component={DetailScreen} />
     </HomeStack.Navigator> 
  );
  const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={{
         headerStyle:{
           backgroundColor: '#1f65ff'
         }, 
         headerTintColor:'#fff',
         headerTitleStyle:{
           fontWeight:'bold'
         }
     }}>
       <DetailStack.Screen name="Detail" component={DetailScreen}  options={{ headerLeft: () => (
           <Icon.Button name="ios-menu" size={25}
           backgroundColor ='#1f65ff' onPress={() => navigation.openDrawer()}>
           </Icon.Button>
         )
       }}/>
     </DetailStack.Navigator> 
  );
  
export default MainTabScreen;
