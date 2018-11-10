import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class Component2 extends Component {
  onPress() {
    console.log("Area Pressed");
  }
  onPress() {
    console.log("Area 2 Pressed");
  }
  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}> Hello Akhil R J</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor="yellow"
          >
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: "yellow"
  },
  myText: {
    color: "blue"
  },
  container: {
    flexDirection: "row",
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: "red"
  },
  v2: {
    flex: 1,
    backgroundColor: "green"
  },
  v3: {
    flex: 1,
    backgroundColor: "black"
  },
  vText: {
    color: "white"
  }
});
