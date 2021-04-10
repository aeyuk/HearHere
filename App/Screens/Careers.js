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
        <CardModal />
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
});
