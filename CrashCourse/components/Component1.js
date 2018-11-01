import React, { Component } from "react";
import { View, AppRegistry, Text } from "react-native";

export default class Component1 extends Component {
  // initializing state here
  constructor(props) {
    super(props);
    this.state = {
      name: "Roxanne",
      showName: true,
      //   props is grabbing the message passed into the component from the Home Screen
      message: this.props.message
    };
  }

  //   setting default props
  static defaultProps = {
    message: "Hi There"
  };
  render() {
    //   checking if name exists
    let name = this.state.showName ? this.state.name : "No name";
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

// Don't know what registery is for
// AppRegistry.registerComponent("App", () => App);
