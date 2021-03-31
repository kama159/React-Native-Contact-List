import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const PersonDetailLine = ({label, content}) => (
    <View style={styles.detailLine}>
        <Text style={[styles.cell, styles.label]}> {label} </Text>
        <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View>
);

const styles = StyleSheet.create({
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
      flex: 1,
    },
    content:{
        flex: 3,
    }
  });

export default PersonDetailLine;