import React, {Component} from 'react';
import {View, Image, TextInput} from 'react-native';
//Custom Imports
import {Images} from '../../Constants';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
// Get name email username bio from redux in text input

//const Edit = () => {
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    AsyncStorage.getItem('userpic', (err, res) => {
      this.setState({pic: res});
      console.log('Profile pic', res);
    });
  };
  render() {
    return (
      <View style={styles.editContainer}>
        <Image
          style={styles.editImage}
          source={{uri: this.state.pic}}
          //source={Images.PROFILEPIC}
          resizeMode="contain"
        />
        <Image
          style={styles.editCameraImage}
          source={Images.TRANSCAMERA}
          resizeMode="contain"
        />
        <TextInput style={styles.editTextInput} placeholder="Name" />
        <TextInput style={styles.editTextInput} placeholder="Username" />
        <TextInput
          style={styles.editTextView}
          multiline={true}
          textAlignVertical="top"
          placeholder="Bio"
        />
        <TextInput value="email" style={styles.emailEmailInput} />
      </View>
    );
  }
}
//};
//export default Edit
