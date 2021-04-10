import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { LOGO } from '../Assets/Images/Images.js'


export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
          </Text>
          <Image
            style={{ width: "100%", height: "40%", resizeMode: "contain"}}
            source={LOGO}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  title: {
    fontFamily: 'Podkova',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});