import React, { Component } from 'react';
import CardModal from '../Components/CareerCardModal/CardModal.js'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Careers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Careers with Ears!
        </Text>
        <Text style={styles.subtitle}>
          There are so many jobs for people interested in hearing loss.
          Click on each person to learn what they do:
        </Text>
        <View>
          <CardModal />
        </View>
      </View>
      // <CardModal/>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    position: 'relative',
    top: '-30%'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    // position: 'relative',
    top: '-30%'
  }
});
