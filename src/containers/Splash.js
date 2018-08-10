import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar, SafeAreaView } from 'react-navigation'


export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})