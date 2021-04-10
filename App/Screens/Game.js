import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

import { ImageLoader } from '../Components/ImageLoader.js'

import {
  INDIGO,
  BLUE,
  GREEN,
  ORANGE
} from '../Assets/Color.js'

import { Icon } from 'react-native-elements';

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
  {
    picture: EAR_DIAGRAM0,
    text: "This is an ear 1",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  },
  {
    picture: EAR_DIAGRAM1,
    text: "This is an ear 2",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  },
  {
    picture: EAR_DIAGRAM2,
    text: "This is an ear 3",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  },
  {
    picture: EAR_DIAGRAM3,
    text: "This is an ear 4",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  },
  {
    picture: EAR_DIAGRAM4,
    text: "This is an ear 5",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  },
  {
    picture: EAR_DIAGRAM5,
    text: "This is an ear 6",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    answer: "XXX"
  }
]

export default class Game extends Component {
  state = { 
      index: 0,
      picture: EAR_DIAGRAM0,
      text: "Let's get started!",
      disabled: true,
      score: 0,

  }

  handleForward(event) {
    this.setState({index: this.state.index == 5 ? 0 : this.state.index + 1})
    this.setState({picture: gameSlides[this.state.index].picture})
    this.setState({text: gameSlides[this.state.index].text})
  }

  handleBackward(event) {
    this.setState({index: this.state.index == 0 ? 5 : this.state.index - 1})
    this.setState({picture: gameSlides[this.state.index].picture})
    this.setState({text: gameSlides[this.state.index].text})

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Track the music note's path through the ear!
        </Text>
        <ImageLoader
            source={this.state.picture}
        />
          <Text style={styles.prompt}>{this.state.text}</Text>
          <View style={styles.answers}>
            <TouchableOpacity style={styles.answer} color={INDIGO} disabled={this.state.disabled}>
              <Text style={styles.answerText}>{gameSlides[this.state.index].A}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} color={INDIGO} disabled={this.state.disabled}>
              <Text style={styles.answerText}>{gameSlides[this.state.index].B}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} color={INDIGO} disabled={this.state.disabled}>
              <Text style={styles.answerText}>{gameSlides[this.state.index].C}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} color={INDIGO} disabled={this.state.disabled}>
              <Text style={styles.answerText}>{gameSlides[this.state.index].D}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answers}>
            <TouchableOpacity onPress={(e) => this.handleBackward(e)}>
              <Icon name="arrow-left" size={50} color={BLUE}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.handleForward(e)}>
              <Icon name="arrow-right" size={50} color={BLUE}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    top: 10
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: "Podkova",
    paddingTop: '10%'
  },
  prompt: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    paddingBottom: 50
  },
  answers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  answer: {
    backgroundColor: INDIGO,
    textDecorationColor: '#FFFFFF',
    width: '23%',
    height: 40,
    alignItems: 'center',
    margin: 3,
    justifyContent: 'center'
  },
  answerText: {
    color: '#FFFFFF'
  }
});