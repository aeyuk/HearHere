import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { Icon } from 'react-native-elements';

import { ImageLoader } from '../Components/ImageLoader.js'
import { SlideUpImage } from '../Components/SlideUpImage.js'

import {
  INDIGO,
  BLUE,
  GREEN,
  GRAY
} from '../Assets/Color.js'

import {
  EAR_DIAGRAM0,
  EAR_DIAGRAM1,
  EAR_DIAGRAM2,
  EAR_DIAGRAM3,
  EAR_DIAGRAM4,
  EAR_DIAGRAM5,
  EAR_DIAGRAM6
} from '../Assets/Images/Images.js'

import {  
  HAPPY, 
  LISTENING, 
  TOO_LOUD1,
  TOO_LOUD2,
  TOO_LOUD3,
  CONFUSED
} from '../Assets/Images/Images.js'

const gameSlides = [
  {
    picture: EAR_DIAGRAM1,
    text: "What is the part of the ear on the outside of our heads that helps collect sounds?",
    A: "Pinna",
    B: "Cochlea",
    C: "Anvil",
    D: "Ear Canal",
    answer: "Pinna",
    correctResponse: "That's right! The pinna helps filter sound waves into the ear so we can hear more things.",
    incorrectResponse: "Incorrect! The correct answer is \"Pinna\"."
  },
  {
    picture: EAR_DIAGRAM2,
    text: "What do you call the tube in the outer ear that leads to the eardrum?",
    A: "The hearing duct",
    B: "The sound pipe",
    C: "The ear canal",
    D: "The noise tunnel",
    answer: "The ear canal",
    correctResponse: "You're right! The pinna, ear canal, and ear drum make up the outer ear.",
    incorrectResponse: "Oops! The correct answer is \"The ear canal\"."
  },
  {
    picture: EAR_DIAGRAM3,
    text: "The eardrum _______ when sound waves hit it.",
    A: "Opens",
    B: "Vibrates",
    C: "Spins",
    D: "Shrinks",
    answer: "Vibrates",
    correctResponse: "You're right! These vibrations are sent to the tiny bones of the middle ear.",
    incorrectResponse: "Whoops! The correct answer is \"Vibrates\"."
  },
  {
    picture: EAR_DIAGRAM4,
    text: "Which of these is NOT one of the three small bones of the middle ear?",
    A: "Wrench",
    B: "Hammer",
    C: "Anvil",
    D: "Stirrup",
    answer: "Wrench",
    correctResponse: "Correct! The hammer, anvil, and stirrup send sound vibrations to the inner ear.",
    incorrectResponse: "Oh no! The correct answer is \"Wrench\"."
  },
  {
    picture: EAR_DIAGRAM5,
    text: "What is the name of the snail-shaped organ that changes sound vibrations into electric signals for the brain?",
    A: "Timpanic",
    B: "Auditoro",
    C: "Spiralea",
    D: "Cochlea",
    answer: "Cochlea",
    correctResponse: "Yes! The cochlea has little hairs that vibrate with sound waves in the fluid of the inner ear. These create the electrical signals!",
    incorrectResponse: "Incorrect! The correct answer is \"Cochlea\"."
  },
  {
    picture: EAR_DIAGRAM6,
    text: "The inner ear also helps with ______.",
    A: "Eating",
    B: "Sleeping",
    C: "Smelling",
    D: "Balance",
    answer: "Balance",
    correctResponse: "That's right! Those little hairs in the cochlea act like sensors for balance!",
    incorrectResponse: "Almost! The correct answer is \"Balance\"."
  },
]

export default class Game extends Component {
  state = { 
      index: -1,
      picture: EAR_DIAGRAM0,
      text: "Let's get started!",
      answeringDisabled: true,
      forwardDisabled: false,
      score: 0,
      color: GRAY,
      choice: null,
      A: ">",
      B: ">",
      C: ">",
      D: ">",
      answer: "",
      correctResponse: "",
      incorrectResponse: "",
      elephant: CONFUSED
  }

  handleForward(event) {
    this.setState({choice: null, answeringDisabled: false, forwardDisabled: true, index: this.state.index + 1}, function() {
      this.validateForward()
    })
  }

  // callback
  validateForward() {
    if (this.state.index < 6) {
      this.setState({picture: gameSlides[this.state.index].picture})
      this.setState({text: gameSlides[this.state.index].text})
      this.setState({A: gameSlides[this.state.index].A})
      this.setState({B: gameSlides[this.state.index].B})
      this.setState({C: gameSlides[this.state.index].C})
      this.setState({D: gameSlides[this.state.index].D})
      this.setState({answer: gameSlides[this.state.index].answer})
      this.setState({correctResponse: gameSlides[this.state.index].correctResponse})
      this.setState({incorrectResponse: gameSlides[this.state.index].incorrectResponse})

    } else {
      this.setScoreSheet(this.state.score)
    }
  }

  handleReset(event) {
    this.setState({index: 0, score: 0, choice: null, forwardDisabled: true, answeringDisabled: false}, function () {
      this.validateReset()
    })
  }
  
  // callback
  validateReset() {
    this.setState({picture: gameSlides[this.state.index].picture})
    this.setState({text: gameSlides[this.state.index].text})
    this.setState({A: gameSlides[this.state.index].A})
    this.setState({B: gameSlides[this.state.index].B})
    this.setState({C: gameSlides[this.state.index].C})
    this.setState({D: gameSlides[this.state.index].D})
    this.setState({answer: gameSlides[this.state.index].answer})
    this.setState({correctResponse: gameSlides[this.state.index].correctResponse})
    this.setState({incorrectResponse: gameSlides[this.state.index].incorrectResponse})
  }

  setScoreSheet(score) {
    if (score == 6) {
      elephant = LISTENING
    } else if (score == 5 || score == 4) {
      elephant = HAPPY
    } else if (score == 3 || score == 2) {
      elephant = TOO_LOUD1
    } else if (score == 1 || score == 0) {
      elephant = TOO_LOUD2
    }
    this.setState({elephant: elephant})
  }

  handleAnswer(choice) {
    // After user chooses an answer, additional selection is disabled
    this.setState({choice: choice, answeringDisabled: true, forwardDisabled: false})
    
    if (choice == gameSlides[this.state.index].answer) {
      this.setState({text: this.state.correctResponse})
      this.setState({score: this.state.score += 1})
    } else {
      this.setState({text: this.state.incorrectResponse})
    }
  }

  responseColor(currentOption) {
    // Green = correct
    if (this.state.choice == this.state.answer && this.state.choice == currentOption) {
      style = [styles.answer, styles.correct]
    // Red = incorrect
    } else if (this.state.choice != this.state.answer && this.state.choice == currentOption) {
      style = [styles.answer, styles.wrong]
    // Indigo = default
    } else {
      style = styles.answer
    }
    return style
  }

  render() {
    if (this.state.index == -1) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            How well do you know the parts of the human ear?
          </Text>
          <Text style={styles.subtitle}>
            Let's play and find out!
          </Text>
          <View>
            <TouchableOpacity onPress={(e) => this.handleForward(e)}>
              <Icon name="arrow-right" size={100} color={BLUE}/>
            </TouchableOpacity>
          </View>
          <View style={styles.elephant} >
            <SlideUpImage elephant={this.state.elephant}/>
          </View>
      </View>
      )
    }
    else if (this.state.index == 6) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            You scored: {this.state.score} out of 6.
          </Text>
          <Text style={styles.subtitle}>
            Play again?
          </Text>
          <View>
            <TouchableOpacity onPress={(e) => this.handleReset(e)}>
              <Icon name="refresh" size={75} color={BLUE}/>
            </TouchableOpacity>
          </View>
          <View style={styles.elephant} >
            <SlideUpImage elephant={this.state.elephant}/>
          </View>
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Track the music note's path through the ear!
          </Text>
          <ImageLoader source={this.state.picture}/>
            <Text style={styles.prompt}>{this.state.text}</Text>
            <View style={styles.answers1}>
              <TouchableOpacity 
                style={this.responseColor(this.state.A)} 
                disabled={this.state.answeringDisabled} 
                onPress={(e) => this.handleAnswer(this.state.A)}>
                  <Text style={styles.answerText}>{this.state.A}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={this.responseColor(this.state.B)} 
                disabled={this.state.answeringDisabled} 
                onPress={(e) => this.handleAnswer(this.state.B)}>
                  <Text style={styles.answerText}>{this.state.B}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.answers2}>
              <TouchableOpacity 
                style={this.responseColor(this.state.C)} 
                disabled={this.state.answeringDisabled} 
                onPress={(e) => this.handleAnswer(this.state.C)}>
                  <Text style={styles.answerText}>{this.state.C}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={this.responseColor(this.state.D)} 
                disabled={this.state.answeringDisabled} 
                onPress={(e) => this.handleAnswer(this.state.D)}>
                  <Text style={styles.answerText}>{this.state.D}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity 
                disabled={this.state.forwardDisabled} 
                onPress={(e) => this.handleForward(e)}
                style={styles.forward}>
                  <Icon name="arrow-right" size={75} color={BLUE}/>
              </TouchableOpacity>
            </View>
        </View>
      );
  }
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
    paddingTop: '10%',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    paddingBottom: 80
  },
  prompt: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 180,
  },
  answers1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 130,
  },
  answers2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
  },
  answer: {
    backgroundColor: INDIGO,
    textDecorationColor: '#FFFFFF',
    alignItems: 'center',
    margin: 3,
    height: 40,
    justifyContent: 'center',
    width: '50%',
  },
  answerText: {
    color: '#FFFFFF'
  },
  correct: {
    backgroundColor: GREEN,
  },
  wrong: {
    backgroundColor: '#FF0000'
  },
  elephant: {
    position: 'absolute',
    bottom: -40
  },
  forward: {
    paddingTop: 150
  }

});