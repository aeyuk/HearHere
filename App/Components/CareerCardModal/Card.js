import React from "react";

import { View, Text, Image } from "react-native";

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
        backgroundColor: "#FFFFFF"
      }}
    >
      <Text
        style={{
          fontSize: 12,
          marginBottom: 5,
          fontWeight: "bold",
          color: "#808080",
        }}
      >
      {props.subtitle}
      </Text>
      <Text
        style={{
          fontSize: 22,
          maxWidth: "100%",
          fontWeight: "bold",
          color: "#000000",
          fontFamily: "Podkova"
        }}
        >
        {props.title}
      </Text>
    </View>
  </View>
)

export default Card;