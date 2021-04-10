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
          Listening to loud sounds for too long can cause hearing loss.
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
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: "Podkova",
    marginHorizontal: 20
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    marginHorizontal: 20,
    paddingBottom: 20
  }
});