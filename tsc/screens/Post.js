import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription, uploadPost } from '../actions/post'
import { Text, View, TextInput, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ImagePicker, Permissions } from 'expo';
import styles from '../styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Post extends React.Component {

  post = () => {
    this.props.uploadPost()
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
      	<Image style={styles.postPhoto} source={{uri: this.props.post.photo }}/>
        <TextInput
        	style={styles.border}
        	value={this.props.post.description}
        	onChangeText={text => this.props.updateDescription(text)}
        	placeholder='Description'
        />
      	<TouchableOpacity style={styles.button} onPress={this.post}>
      		<Text>Post</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, uploadPost }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)