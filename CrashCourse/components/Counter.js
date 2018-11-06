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
import { connect } from "react-redux";

class Counter extends Component {
  // remove component state
  // state = {
  //   counter: 0
  // };

  // remove methods
  // increaseCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };
  // decreaseCounter = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: 200,
          justifyContent: "space-around",
          marginTop: 300
        }}
      >
        <TouchableOpacity onPress={() => this.props.increaseCounter()}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
        <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// passing the counter state from redux store to the component state
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

// here we are disptaching the increase and decrease functions and setting the type
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

// here is the actual connectons.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
