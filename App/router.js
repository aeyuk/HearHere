import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import Game from './Screens/Game.js';
import Listen from './Screens/Listen.js';
import Home from './Screens/Home.js';
import Careers from './Screens/Careers.js'

const Tab = createMaterialBottomTabNavigator();


function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="white"
                shifting="true"
            >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: () => <Icon name="home-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: '#3D64EE'
                    }}
                />
                <Tab.Screen 
                    name="Listen" 
                    component={Listen}
                    options={{
                        tabBarLabel: "Listen",
                        tabBarIcon: () => <Icon name="ear-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: '#38B6E1'
                    }}
                />
                <Tab.Screen 
                    name="Game" 
                    component={Game}
                    options={{
                        tabBarLabel: "Game",
                        tabBarIcon: () => <Icon name="game-controller-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: '#75BA03'
                    }}
                />                
                <Tab.Screen 
                    name="Careers" 
                    component={Careers}
                    options={{
                        tabBarLabel: "Careers",
                        tabBarIcon: () => <Icon name="briefcase-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: '#FF4C00'
                    }}
                />            
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;