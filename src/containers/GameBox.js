import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Turn from '../components/Turn';
import Tile from '../components/Tile';

export default class GameBox extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      tiles: ["","","","","","","","",""],
      turn: 'O',
      status: null
    }
  }

  tileClicked(position, player){
    var tiles = this.state.tiles;
    if ( (tiles[position] === 'X' || tiles[position] === 'O' || this.checkWinner(tiles) !== null)) return;
    tiles[position] = player;
    this.setState({tiles: tiles, turn: player === 'O' ? 'X' : 'O'});
  }

  checkWinner(tiles){
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [first, second, third] = lines[i];
      if (tiles[first] && tiles[first] === tiles[second] && tiles[first] === tiles[third]) {
        return tiles[first];
      }
    }
    return null;
  }

  render(){
    const winner = this.checkWinner(this.state.tiles);
    const turn = this.state.turn;
    let status;
    if (winner !== null) {
      this.state.status = 'The winner is: ' + winner;
    } else {
      this.state.status = 'It is player '+ turn + 's turn';
    }

    return (
      <View>
      <Text>Let's play Noughts & Crosses</Text>
      <View className="game" style={styles.container}>
      { this.state.tiles.map( (tile, position) => {
        return (
          <Tile status={tile} key={position} position={position} turn={this.state.turn} tileClick={this.tileClicked.bind(this)}/>
          );})}
      </View>
      <View>
      <Turn status={this.state.status}/>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});