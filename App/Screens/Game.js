import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import {
  EAR_DIAGRAM0,
  EAR_DIAGRAM1,
  EAR_DIAGRAM2,
  EAR_DIAGRAM3,
  EAR_DIAGRAM4,
  EAR_DIAGRAM5,
  EAR_DIAGRAM6
} from '../Assets/Images/Images.js'

const gameSlides = [
  EAR_DIAGRAM0,
  EAR_DIAGRAM1,
  EAR_DIAGRAM2,
  EAR_DIAGRAM3,
  EAR_DIAGRAM4,
  EAR_DIAGRAM5,
  EAR_DIAGRAM6
]

export default class Game extends Component {
  state = { 
      index: 0,
      gameSlide: EAR_DIAGRAM0
  }

  handleForward(event) {
    this.setState({index: this.state.index == 6 ? 0 : this.state.index + 1})
    console.log(this.state.index)
    this.setState({gameSlide: gameSlides[this.state.index]})
  }

  handleBackward(event) {
    this.setState({index: this.state.index == 0 ? 6 : this.state.index - 1})
    console.log(this.state.index)
    this.setState({gameSlide: gameSlides[this.state.index]})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Track the music note's path through the ear!
        </Text>
        <Image
            style={{ width: "100%", resizeMode: "contain"}}
            source={this.state.gameSlide}
        />
        <Button 
          style={{backgroundColor: 'green'}} 
          onPress={(e) => this.handleForward(e)}
          title="Forward">
        </Button>
        <Button 
          style={{backgroundColor: 'red'}} 
          onPress={(e) => this.handleBackward(e)}
          title="Backward">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    // margin: 10,
    fontWeight: '900',
    fontFamily: "Podkova",
    paddingTop: '10%'
    // position: 'absolute',
    // top: '10%'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});