import React, { Component } from 'react';
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
          There are so many jobs for people interested in hearing loss!
        </Text>
        <Text style={styles.subtitle}>
          Click on each person to learn what they do:
        </Text>
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
    position: 'relative',
    top: '-30%'
  }
});