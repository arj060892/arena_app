import React, { Component } from "react";
import { Text, View, TextInput, Switch } from "react-native";

export default class Component3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "Hello",
      switchValue: false
    };
  }
  onChange(value) {
    this.setState({
      textValue: value
    });
  }
  onSwitchChange(value) {
    this.setState({
      switchValue: value
    });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Text"
          onChangeText={value => this.onChange(value)}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={value => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}
