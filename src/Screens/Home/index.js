import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// PACKAGES
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
      backgroundColor: "red"
    }
  };

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#FFDD0D">
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ alignSelf: "center" }}>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <View style={styles.container}>
          <Text style={styles.welcome}>Home!</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDD0D"
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
