/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import s from './style';
import {UserPhoto} from './UserPhoto';
import {UserInfo, UserBtn} from './UserInfo';

const avatar = require('../images/user-photo.png');
const user = require('../images/user-photo.png');
const newEmail = 't';
const newPass = 't';

export default class HomePage extends Component {
  state = {
    email: '',
    pass: '',
    abc: 'flex',
  };

  usercontrol = () => {
    let email = this.state.email;
    let pass = this.state.pass;
    let abc = 'none';
    if (email != newEmail || pass != newPass) {
      Alert.alert('Error', 'Login information is incorrect..');
      abc = 'flex';
    }
    this.setState({email: '', pass: '', abc: abc});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />

        <View style={{flex: 1}}>
          <Image source={require('../images/bg-img.png')} style={s.bg_img} />
        </View>

        <View style={{alignItems: 'center'}}>
          <UserPhoto kresmi={this.state.abc == 'flex' ? avatar : user} />
        </View>

        <View style={{flex: 3, display: this.state.abc}}>
          <View
            style={{
              height: 120,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <UserInfo
              title="E-mail"
              islem={txt => this.setState({email: txt})}
              value={this.state.email}
            />
            <UserInfo
              title="Password"
              islem={txt => this.setState({pass: txt})}
              value={this.state.pass}
              secure={true}
            />
          </View>
          <View
            style={{
              height: 150,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <UserBtn stil="" title="Forgot Password" txtcolor="#3F00FF" />
            <UserBtn
              stil={s.loginbtn}
              title="Login"
              txtcolor="white"
              islem={this.usercontrol}
            />
          </View>
        </View>

        <View
          style={{
            flex: 3,
            display: this.state.abc == 'none' ? 'flex' : 'none',
          }}>
          <View
            style={{
              height: 120,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                color: '#191970',
                fontSize: 40,
                fontWeight: 'bold',
              }}>
              WELCOME
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
                marginTop: 60,
              }}>
              Test User
            </Text>
          </View>
          <View
            style={{
              height: 150,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text></Text>
            <UserBtn
              stil={s.loginbtn}
              title="Start"
              txtcolor="white"
              islem={() => this.setState({abc: 'flex'})}
            />
          </View>
        </View>
      </View>
    );
  }
}
