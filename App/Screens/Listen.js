import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
        <Text style={styles.title}>
          Record a sound and see how loud it is:
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
    top: '-10%'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    position: 'relative',
    top: '-10%'
  }
});