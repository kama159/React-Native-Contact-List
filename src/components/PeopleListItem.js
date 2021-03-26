import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import capitalizeFirstLetter from "../util/capitalizeFirstLetter";

const PeopleListItem = ({ person, navigateToPersonDetail }) => {
  const { first, last } = person.name;

  return (
    <TouchableOpacity onPress={() => navigateToPersonDetail({person})}>
      <View style={styles.line}>
        <Image
          style={styles.img}
          source={{
            uri: person.picture.thumbnail,
          }}
        />
        <Text style={styles.lineText}>
          {`${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#e2f9ff",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",

    alignItems: "center",
    flexDirection: "row",
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 7,
  },
  img: {
    aspectRatio: 1, // não distorce a imagem
    flex: 1,

    marginLeft: 15,
    borderRadius: 50,
  },
});

export default PeopleListItem;
