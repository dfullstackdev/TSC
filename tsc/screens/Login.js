import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user.js'
import firebase from 'firebase'
import styles from '../styles.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends React.Component {

    //One time login functionality
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
            this.props.getUser(user.uid, 'LOGIN')
            if(this.props.user != null){
              this.props.navigation.navigate('Home')
            }
          }
        })
      }
  
    render() {
      return (
        <View style={styles.container}>

          <Image style={{width: 240, height: 70}} source={require('../assets/logo.jpg')} /> 
          <TextInput
              style={styles.border}
              value={this.props.user.email}
              onChangeText={input => this.props.updateEmail(input)}
              placeholder='Email'
          />
          <TextInput
              style={styles.border}
              value={this.props.user.password}
              onChangeText={input => this.props.updatePassword(input)}
              placeholder='Password'
              secureTextEntry={true}
          />
            <TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
                <Text>Login</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)