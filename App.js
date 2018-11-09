/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Secured from './src/screens/Secured';

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn)
      return <Secured
        onLogoutPress={() => this.setState({ isLoggedIn: false })}
      />;
    else
      return <Login
        onLoginPress={() => this.setState({ isLoggedIn: true })}
      />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
