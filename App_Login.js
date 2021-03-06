import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';

const logo = require('./src/images/login-logo.png');
const backgroundImage = require('./src/images/splash-bg.jpg');
const login = 'Login';
const signup = 'Signup';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'User Name',
      password: 'Password',
      isUsernameFocused: false,
      isPasswordFocused: false,
    };
  }
  onFocusChangeUsername = () => {
    this.setState({ isUsernameFocused: true });
  }
  onFocusChangePassword = () => {
    this.setState({ isPasswordFocused: true });
  }
  button() {
    Alert.alert(
      'Alert Title',
      'Alert message here...',
      [
        { text: 'Get Started', onPress: () => console.warn('NO Pressed'), style: 'cancel' },
      ]
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#388e3c" />
        <Image source={logo} style={styles.logo} />

        <View style={styles.paddingHorizontal}>
          <TextInput
            placeholder={this.state.username}
            onFocus={() => this.onFocusChangeUsername()}
            style={(this.state.isUsernameFocused) ? styles.inputTextActive : styles.inputTextGrey}
          />

          <TextInput
            secureTextEntry={true}
            onFocus={() => this.onFocusChangePassword()}
            placeholder={this.state.password}
            style={(this.state.isPasswordFocused) ? styles.inputTextActive : styles.inputTextGrey}
          />
        </View>
 
        <View style={{ flexDirection: 'row', width: '80%', marginTop: 20 }}>
          <View style={{ width: '50%' }} >
            <Text style={[styles.textButtonLight, styles.marginRight]}>
              {signup}
            </Text>
          </View>
          <View style={{ width: '50%' }} >
            <Text style={[styles.text, styles.marginLeft]}>
              {login}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#FFFFFF',
    backgroundColor: '#188b0c',
    borderRadius: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButtonLight: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#767676',
    borderRadius: 20,
    borderColor: '#d4d4d4',
    borderWidth: 1,
    textAlign: 'center',

  },
  inputTextGrey: {
    width: '100%',
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 24,
    color: '#d4d4d4',
    fontWeight: 'bold',
    fontSize: 18,

  },
  inputTextActive: {
    width: '100%',
    borderBottomColor: '#fe9a44',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 24,
    color: '#767676',
    fontSize: 18,
    fontWeight: 'normal',
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  paddingHorizontal: {
    width:'100%',
    paddingHorizontal:32,
  },

});