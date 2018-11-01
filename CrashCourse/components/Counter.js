import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class Counter extends Component {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: 200,
          justifyContent: "space-around"
        }}
      >
        <TouchableOpacity onPress={() => this.increaseCounter()}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
        <TouchableOpacity onPress={() => this.decreaseCounter()}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}