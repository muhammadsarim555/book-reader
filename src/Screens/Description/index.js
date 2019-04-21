import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class Description extends Component {
  state = {
    description: ""
  }
    static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.description.title,
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "#FFDD0D"
    }
  });

  componentDidMount = () => {
    const { navigation } = this.props;
    const ttt = navigation.state.params.description;
    this.setState({description: ttt.description})
    console.log(ttt, "::::");
  };

  render() {
    return (
      <View>
        <Text>Description</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
