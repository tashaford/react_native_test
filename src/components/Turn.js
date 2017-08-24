import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

class Turn extends React.Component {
  render(){
    return(
      <View className="turn">
      <Text style={styles.text}>{this.props.status}</Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    fontSize: 20,
    width: 160,
  }
});

export default Turn;