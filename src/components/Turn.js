import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

class Turn extends React.Component {
  render(){
    return(
      <View className="turn">
        <Text>{this.props.status}</Text>
      </View>
      )
  }
}

export default Turn;