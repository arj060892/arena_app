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
const getStarted = 'Get Started';
const Signup = 'Signup';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: 'User Name', password: 'Password' };
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
      // <ImageBackground
      //   source={backgroundImage}
      //   style={{ width: '100%', height: '100%' }}
      // >
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#388e3c"
        />

        <Image source={logo} style={styles.logo} />


        {/* <TouchableHighlight onPress={() => this.button()}>
            <Text style={styles.text}>
              {getStarted}
            </Text>
          </TouchableHighlight> */}

        <TextInput
          style={styles.inputText}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />


        <View style={{ flexDirection: 'row', width: '80%', marginTop: 20 }}>
          <View style={{ width: '50%' }} >
            <Text style={[styles.textButtonLight, styles.marginRight]}>
              {Signup}
            </Text>
          </View>
          <View style={{ width: '50%' }} >
            <Text style={[styles.text, styles.marginLeft]}>
              {getStarted}
            </Text>
          </View>
        </View>

      </View>
      // </ImageBackground>
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
  welcome: {
    textAlign: 'center',
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
    fontWeight: 'bold',
    borderColor: '#d4d4d4',
    borderWidth: 1,
    textAlign: 'center',
  },
  inputText: {
    width: '90%',
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 24,
    color: '#d4d4d4',
    fontWeight: 'bold',
    fontSize: 18,
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginRight: {
    marginRight: 10,
  }
});