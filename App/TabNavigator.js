import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import Game from './Screens/Game.js';
import Listen from './Screens/Listen.js';
import Home from './Screens/Home.js';
import Careers from './Screens/Careers.js'

import {
    INDIGO,
    BLUE,
    GREEN,
    ORANGE
} from './Assets/Color.js'

const colors = [INDIGO, BLUE, GREEN, ORANGE];

const Tab = createMaterialBottomTabNavigator();


function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="white"
                shifting="true"
                tabBarPosition="bottom"
                // style={({ route }) => ({
                //     backgroundColor: () => {
                //         let color
                //         if (route.name === 'Home')
                //             color = INDIGO
                //         else if (route.name === 'Listen')
                //             color = BLUE
                //         else if (route.name === 'Game')
                //             color = GREEN
                //         else
                //             color = ORANGE
                //         return color
                //     }
                // })}
            >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: () => <Icon name="home-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: INDIGO
                    }}
                />
                <Tab.Screen 
                    name="Listen" 
                    component={Listen}
                    options={{
                        tabBarLabel: "Listen",
                        tabBarIcon: () => <Icon name="ear-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: BLUE
                    }}
                />
                <Tab.Screen 
                    name="Game" 
                    component={Game}
                    options={{
                        tabBarLabel: "Game",
                        tabBarIcon: () => <Icon name="game-controller-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: GREEN
                    }}
                />                
                <Tab.Screen 
                    name="Careers" 
                    component={Careers}
                    options={{
                        tabBarLabel: "Careers",
                        tabBarIcon: () => <Icon name="briefcase-outline" type="ionicon" size={24} color='#FFFFFF' />,
                        tabBarColor: ORANGE
                    }}
                />            
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default Navigator;