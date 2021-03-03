/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";

import { Dimensions, Image, Text, View } from "react-native";

import CARDS from "./CareerCards";

const { height } = Dimensions.get("window");

export default class CardModal extends React.Component {
  render() {
    return (
      <CardList
        listProps={{
          ListHeaderComponent: () => (
            <View style={{ padding: 16, paddingBottom: 0 }}>
              <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>Careers for Ears</Text>
            </View>
          )
        }}
        data={CARDS}
        detailsContainerStyle={{ borderRadius: 0 }}
        renderItem={({ item }) => {
          if (item.renderItem) return item.renderItem({ item });
        }}
        //Add custom description here
        renderDetails={() => (
          <View
            style={{
              paddingVertical: 30,
              paddingHorizontal: 16
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Insert Description Text Here.
            </Text>
          </View>
        )}
      />
    );
  }
}