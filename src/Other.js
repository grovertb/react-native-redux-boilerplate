import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator, createStackNavigator, StatusBar } from 'react-navigation'

import reducer from './src/reducer';
import RepoList from './src/RepoList';
import RepoDetail from './src/RepoDetail';
import Profile from './src/Profile';

const store = createStore(reducer);

const Tabs = TabNavigator({
  Profile: {
    screen: Profile
  },
  RepoList: {
    screen: RepoList
  }
});

// const Stack = createStackNavigator({
//   Home: {
//     screen: Tabs
//   },
//   Detail: {
//     screen: RepoDetail
//   }
// });

const Stack = StackNavigator(
  {
    Home: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Home',
        gesturesEnabled: true,
        statusBarStyle: 'light-content',
      })
    },
    Details: {
      screen: RepoDetail,
      navigationOptions: () => ({
        title: 'Details',
        gesturesEnabled: true
      })
    }
  },
  {
    // mode: 'card',
    initialRouteName: 'Home'
  }
)

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
    backgroundColor: '#fff'
  }
})