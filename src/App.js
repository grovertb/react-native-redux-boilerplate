import React, {Component} from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { createStackNavigator, SafeAreaView } from 'react-navigation'

import reducer from './reducer'
import Home from './containers/Home'
import Splash from './containers/Splash'

const store = createStore(reducer)

const Stack = createStackNavigator(
  {
    Splash: Splash,
    Home: Home
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.24)')
StatusBar.setTranslucent(true)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})