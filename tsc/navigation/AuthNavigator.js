import React from 'react';
import Login from '../screens/Login.js'
import { Ionicons } from '@expo/vector-icons'
import SignupScreen from '../screens/Signup'
import { createAppContainer } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    Login: { 
      screen: Login,
      navigationOptions: {
      	header: null
      }
    },
    Signup: { 
      screen: SignupScreen,
      navigationOptions: ({ navigation }) => ({
        title: '    Sign up   ',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
      })
    }
  }
);

export default createAppContainer(StackNavigator);