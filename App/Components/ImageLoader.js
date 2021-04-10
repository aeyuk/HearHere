import React, { Component, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export const ImageLoader = ( props ) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fadeIn()
    }, [props.source]);

    const fadeIn = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
                useNativeDriver: true,
            })
        ],).start()
      }

    return (
      <Animated.Image
        onLoad={this.fadeIn}
        {...this.props}
        style= {{ opacity: opacity, resizeMode: "contain", width: "100%"}}
        source={props.source}
      />
    );
}