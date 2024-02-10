/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {View, Image} from 'react-native';
import s from './style';

export class UserPhoto extends Component {
  render() {
    return (
      <View style={s.userimage}>
        <Image
          source={require('../images/user-photo.png')}
          style={s.userimagestil}
        />
      </View>
    );
  }
}
