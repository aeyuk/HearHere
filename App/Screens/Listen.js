import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SoundRecorder from '../Components/SoundRecorder.js'


export default class Listen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          It's important to protect your ears!
        </Text>
        <Text style={styles.subtitle}>
          Listening to loud sounds for too long can damage your ears.
        </Text>
        <SoundRecorder/>
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
    paddingTop: '30%'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    fontWeight: '900',
    fontFamily: "Podkova"
    // top: '-30%'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 20
    // top: '-30%'
  }
});