import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class RepoDetail extends Component {
  render() {
    return (
      <View>
        <Text>RepoDetail</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default RepoDetail;