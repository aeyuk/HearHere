/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";

import { Dimensions, Text, View } from "react-native";

import CARDS from "./CareerCards";

const { height } = Dimensions.get("window");

export default class CardModal extends React.Component {
  render() {
    return (
      <CardList
        listProps={{
          ListHeaderComponent: () => (
            <View style={{ padding: 16, paddingBottom: 0 }}>
              <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>All Ears for These Careers!</Text>
              <Text style={{fontSize: 18, textAlign: 'left', top: '20%', marginBottom: '10%'}}>
                There are so many jobs for people interested in hearing loss.
                Click on each person to learn what they do:
              </Text>
            </View>
          )
        }}
        data={CARDS}
        detailsContainerStyle={{ borderRadius: 0 }}
        renderItem={({ item }) => {
          if (item.renderItem) return item.renderItem({ item });
        }}
        //Add custom description here
        renderDetails={({ item, index }) => {
          return (
            <View style={{paddingVertical: 30, paddingHorizontal: 16}}>
              <Text>{item.description}</Text>
            </View>
          )
        }}
      />
    );
  }
}