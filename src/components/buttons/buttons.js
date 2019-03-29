import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Default button </Text>
      </View>
    );
  }
}

export default Button;
