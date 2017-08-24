import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBox from './src/containers/GameBox';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GameBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
