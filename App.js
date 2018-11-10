import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Navigator } from "react-native";
import Component1 from "./App/Components/Component1/component1";
import Component2 from "./App/Components/Component2/component2";
import Component3 from "./App/Components/Component3/component3";
import Component4 from "./App/Components/Component4/component4";
import Component5 from "./App/Components/Component5/component5";
import Component6 from "./App/Components/Component6/component6";

export default class App extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case "component5":
        return <Component5 navigator={navigator} title="component5" />;
        break;
      case "component6":
        return <Component6 navigator={navigator} title="component6" />;
        break;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ id: "component5" }}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom
        }
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
