import React from 'react';
import { Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeNavigator, SearchNavigator, PostNavigator, ActivityNavigator, ProfileNavigator } from './StackNavigator'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: ' DEVFEED ',
        tabBarIcon: () => (
          <Ionicons name='ios-home' size={32} />
        ) 
      }
    },
    Search: { 
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: ' SEARCH ',
        tabBarIcon: () => (
          <Ionicons name='ios-search' size={32} />
        ) 
      }
    },
    Post: { 
      screen: PostNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: () => (
          <Image style={{width: 50, height: 50}} source={require('../assets/a.png')} />
        ) 
      }
    },
    Activity: { 
      screen: ActivityNavigator,
      navigationOptions: {
        tabBarLabel: ' ACTIVITY ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? 'ios-heart' : 'ios-heart-empty'} size={32} />
        ) 
      }
    },
    MyProfile: { 
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: ' PROFILE ',
        tabBarIcon: () => (
          <Ionicons name='ios-person' size={32} />
        ) 
      }
    }
  }, 
  { 
    tabBarOptions: {
      style: {
        paddingVertical: 10,
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);