import React from "react";

import { View, Text, Image } from "react-native";

import { FILLER } from '../../Assets/Images/Images.js'


const Card = (props) => (
  <View>
    <Image
      style={{
        width: "100%",
        height: "70%"
      }}
      source={props.image}
    />
    <View
      style={{
        width: "100%",
        padding: 16,
        backgroundColor: "rgb(255, 255, 255)"
      }}
    >
      <Text
        style={{
          fontSize: 12,
          marginBottom: 5,
          fontWeight: "bold",
          color: "rgba(0, 0, 0, 0.5)"
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 26,
          maxWidth: "60%",
          fontWeight: "bold",
          color: "rgb(51, 51, 51)"
        }}
      >
        {props.subtitle}
      </Text>
    </View>
  </View>
)

export default Card;