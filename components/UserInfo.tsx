/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';
import s from './style';

export class UserInfo extends Component {
  render() {
    return (
      <TextInput
        style={s.loginbox}
        placeholder={this.props.title}
        placeholderTextColor="gray"
        onChangeText={this.props.islem}
        value={this.props.value}
        secureTextEntry={this.props.secure}
      />
    );
  }
}

export class UserBtn extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.stil} onPress={this.props.islem}>
        <Text style={{color: this.props.txtcolor, fontWeight: 'bold'}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
