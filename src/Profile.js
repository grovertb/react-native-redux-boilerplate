import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default Profile;