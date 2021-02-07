import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements';

import Game from '../App/Screens/Game.js';
import Listen from '../App/Screens/Listen.js';
import Home from '../App/Screens/Home.js';

const RootStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="ionicon" size={28} color='#3D64EE' />
    }
  },
  Listen: {
    screen: Listen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ear-outline" type="ionicon" size={28} color='#38B6E1' />
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="game-controller-outline" type="ionicon" size={28} color='#A8E440' />
    }
  },
});

const TabNavigator = createAppContainer(RootStack)


export default TabNavigator;