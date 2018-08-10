import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.27

StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.24)')
StatusBar.setTranslucent(true)

const isAndroid = Platform.OS === 'android';

// const Screen1 = ({ navigation }) => (
//   <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
//     <StatusBar
//       barStyle="light-content"
//       backgroundColor="#6a51ae"
//     />
//     <Text style={[styles.paragraph, { color: '#fff' }]}>
//       Light Screen
//     </Text>
//     <Button
//       title="Next screen"
//       onPress={() => navigation.navigate('Screen2')}
//       color={isAndroid ? "blue" : "#fff"}
//     />
//     {/* <Button
//       title="Toggle Drawer"
//       onPress={() => navigation.navigate('DrawerToggle')}
//       color={isAndroid ? "blue" : "#fff"}
//     /> */}
//   </SafeAreaView>
// );

const Screen2 = ({ navigation }) => (
  <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
    {/* <StatusBar
      barStyle="dark-content"
      backgroundColor="#ecf0f1"
    /> */}
    <Text style={styles.paragraph}>
      Dark Screen
    </Text>
    <Button
      title="Next screen"
      onPress={() => navigation.navigate('Screen1')}
    />
    {/* <Button
      title="Toggle Drawer"
      onPress={() => navigation.navigate('DrawerToggle')}
    /> */}
  </SafeAreaView>
);

class Screen1 extends React.Component {
  componentDidMount() {
    // this._navListener = this.props.navigation.addListener('didFocus', () => {
    //   StatusBar.setBarStyle('light-content');
      // isAndroid && StatusBar.setBackgroundColor('#6a51ae');
    // });
  }

  // componentWillUnmount() {
  //   this._navListener.remove();
  // }
  render(){
    return(
      <SafeAreaView style={[styles.container, { backgroundColor: 'green' }]} forceInset={{ top: 'always', horizontal: 'never' }}>
        {/* <StatusBar
          // barStyle="light-content"
          // backgroundColor="#6a51ae"
          backgroundColor="rgba(0, 0, 0, 0.24)"
          translucent
        /> */}
        <Text style={[styles.paragraph, { color: '#fff' }]}>
          Light Screen
        </Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color={isAndroid ? "blue" : "#fff"}
        />
        {/* <Button
          title="Toggle Drawer"
          onPress={() => navigation.navigate('DrawerToggle')}
          color={isAndroid ? "blue" : "#fff"}
        /> */}
      </SafeAreaView>
    )
  }
}

// export default StackNavigator({
//   Screen1: {
//     screen: Screen1,
//   },
//   Screen2: {
//     screen: Screen2,
//   },
// }, {
//   headerMode: 'none',
// });



const appDrawer = DrawerNavigator({
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
});

export default StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: appDrawer,
		}
	},
  {
    headerMode: 'none'
  }
);


// export default TabNavigator({
//   Screen1: {
//     screen: Screen1,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
//         StatusBar.setBarStyle('light-content');
//         isAndroid && StatusBar.setBackgroundColor('#6a51ae');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
//   Screen2: {
//     screen: Screen2,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         StatusBar.setBarStyle('dark-content');
//         isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
