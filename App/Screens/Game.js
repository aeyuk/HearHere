import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Track the music note's path through the ear!
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
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    position: 'relative',
    top: '-20%'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});