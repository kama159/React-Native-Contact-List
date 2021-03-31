import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PersonDetailLine from '../components/PersonDetailLine';

export default class PersonDetailPage extends React.Component {
  render() {
    const { person } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: person.picture.large,
          }}
        />
        <View style={styles.detailContainer}>
          <PersonDetailLine label="Nome: " content={`${person.name.first} ${person.name.last}`}/>
          <PersonDetailLine label="Email: " content={person.email}/>
          <PersonDetailLine label="Tel: " content={person.phone}/>
          <PersonDetailLine label="Cel: " content={person.cell}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 15
  },
  img:{
    aspectRatio: 1
  },
  detailContainer:{
    marginTop: 10,
  },
  detailLine:{
    backgroundColor: '#e2f9ff',
    elevation: 1,
    flexDirection: 'row', // colocando um text do lado do outro
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
    marginTop: 5
  },
  cell:{
    fontSize: 18,
  },
  label:{
    fontWeight: 'bold',
  }
});
