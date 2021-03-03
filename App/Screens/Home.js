import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Hear Here!
        </Text>
        <Image
          style={{
            width: "100%",
            height: "50%"
          }}
          source={require('../Assets/Images/Filler_Image.png')}/>
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
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});