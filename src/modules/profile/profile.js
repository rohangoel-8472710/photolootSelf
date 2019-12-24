import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
//Custom Imports
import {styles} from './styles';
import {vh, color, Strings, Images} from '../../Constants';
import NavTabBar from './index';
import {Header} from '../../component/headers/header';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      pic: '', 
      mailid: '', 
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({name: 'Lucy'});
    this.getData();
  }
  renderText = (...rest) => {
    return (
      <Text
        style={{
          fontSize: rest[1],
          fontWeight: rest[2],
          color: rest[3],
          marginTop: rest[4],
        }}>
        {rest[0]}
      </Text>
    );
  };
  getData = async () => {
    try {
      AsyncStorage.getItem('name', (err, res) => {
        this.setState({Name: res});
      });
      AsyncStorage.getItem('userpicfb', (err, res) => {
        this.setState({pic: res});
        console.log('Profile pic', res);
      });
      // AsyncStorage.getItem('mailfb', (err, res) => {
      //   this.setState({mailid: res});
      //   console.log('emailid', res);
      // });
      // AsyncStorage.getItem('name', (err, res) => {
      //   this.setState({namesub: res});
      //   console.log('name', res);
      // });
      AsyncStorage.getItem('email', (err, res) => {
        this.setState({mailid: res});
        console.log('mail', res);
      });
      // value previously
    } catch (e) {
      // error reading value
    }
  };
  render() {
    return (
      <>
        <Header
          title={this.state.Name}
          showBackButton={false}
          showVotebutton={false}
        />
        <View style={styles.container}>
          {(pic = !null) ? (
            <Image
              style={styles.profileImgStyle}
              source={{uri: this.state.pic}}
            />
          ) : (
            <Image style={styles.profileImgStyle} />
          )}
          <View style={styles.texts}>
            <View style={styles.editView}>
              {this.renderText(this.state.Name, vh(15), '600')}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Edit')}
                style={styles.editButton}>
                <Image source={Images.EDITIMAGE} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            {this.state.mailid === null
              ? this.renderText('no Email Id', vh(12), '600', color.gray)
              : this.renderText(this.state.mailid, vh(12), '600', color.gray)}

            {this.renderText(
              Strings.profileDescription,
              vh(11),
              '400',
              'black',
              vh(9),
            )}
            <View style={{flexDirection: 'row'}}>
              {this.renderText('250K', vh(11), 'bold', color.TAndC, vh(14))}
              {this.renderText(
                ' votes received till now',
                vh(11),
                '400',
                color.gray,
                vh(14),
              )}
            </View>
          </View>
        </View>
        <NavTabBar />
      </>
    );
  }
}
