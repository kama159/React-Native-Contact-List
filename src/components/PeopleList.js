import React from "react";
import { View } from "react-native";

import PeopleListItem from "./PeopleListItem";

const PeopleList = ({ peoples, onPressPeopleListItem }) => {

  return (
    <View>
      {peoples.map((person, index) => {
        return <PeopleListItem key={index} person={person} navigateToPersonDetail={onPressPeopleListItem} />;
      })}
    </View>
  );
};

export default PeopleList;
