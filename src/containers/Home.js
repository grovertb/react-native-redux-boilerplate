import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import { DrawerNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'

class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const HomeStack = createStackNavigator({ 
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
 })

export default DrawerNavigator({ HomeStack })