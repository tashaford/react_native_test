import React from 'react';
import { AppRegistry, View, Text, Button, StyleSheet } from 'react-native';

class Tile extends React.Component {

  clickHandler() {
    this.props.tileClick (this.props.position, this.props.turn);
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button style={styles.button} onPress={this.clickHandler.bind(this)} title={this.props.status}/>
      </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignContent: 'space-around'
  },
  buttonContainer: {
    backgroundColor: '#a8dbaa',
    borderRadius: 5,
    width: 50,
    height: 50
  },
  button: {
    color: '#0b4f0d',
  }

})



export default Tile