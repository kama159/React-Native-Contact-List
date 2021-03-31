import React from "react";
import { FlatList } from "react-native";

import PeopleListItem from "./PeopleListItem";

const PeopleList = ({ peoples, onPressPeopleListItem }) => {
  return (
    <FlatList
      data={peoples}
      renderItem={({ item }) => (
        <PeopleListItem
          person={item}
          navigateToPersonDetail={onPressPeopleListItem}
        />
      )}
      keyExtractor={item => item.email }
    />
  );
};

export default PeopleList;
