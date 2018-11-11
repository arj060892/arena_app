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
  Alert
} from 'react-native';

const logo = require('./src/images/login-logo.png');
const backgroundImage = require('./src/images/splash-bg.jpg');
const getStarted = 'Get Started';
export default class App extends Component {

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
      <ImageBackground
        source={backgroundImage}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#4F6D7A"
          />

          <Image source={logo} style={styles.logo} />


          <TouchableHighlight onPress={() => this.button()}>
            <Text style={styles.text}>
              {getStarted}
            </Text>
          </TouchableHighlight>


        </View>
      </ImageBackground>
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
    marginBottom: '10%',
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    color: '#FFFFFF',
    backgroundColor: '#188b0c',
    borderRadius: 20,
    fontWeight: 'bold',
  }
});