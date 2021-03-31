import React from "react";
import { View, ActivityIndicator, StyleSheet, Text  } from "react-native";
import axios from "axios";

import PeopleList from "../components/PeopleList";

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
      axios
      .get("https://randomuser.me/api/?nat=br&results=150")
      .then((response) => {
        const { results } = response.data;
        this.setState({ 
          peoples: results,
          loading: false
        });
      }).catch(error => {
        this.setState({ 
          error: true,
          loading: false
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading 
            ? <ActivityIndicator size='large' color='#6ca2f7'/>
            : this.state.error 
              ? <Text style={styles.errorText}>Ops... Algo deu errado =(</Text>
              : null
        }
        <View>
          <PeopleList
            peoples={this.state.peoples}
            onPressPeopleListItem={(pageParams) => {
              this.props.navigation.navigate("PersonDetail", pageParams);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  errorText:{
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
  }
});
