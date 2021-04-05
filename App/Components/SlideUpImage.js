import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View, Image } from 'react-native';

export const SlideUpImage = ( props ) => {
    // Initial position of image
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 15 = Listening Elephant ... hacky
        if (props.elephant != 15) startAnimation()
    }, [props.elephant]);

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
                easing: Easing.Bounce
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 400,
                easing: Easing.Bounce,
                useNativeDriver: true
            })
        ],).start()
    }

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Dimensions.get('window').height - 70],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[{ transform: [{ translateY }] }]}>
                <Image style={styles.elephant} source={props.elephant}/>
            </Animated.View>
        </View>
    )
}

// change elephants to strings in sound recorder and change import of elephants to be over here and use useEffect hook to see when name changes.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    elephant: {
        resizeMode: 'contain',
        height: 300,
    }
});
