import React, { Component } from "react";
import { Text, View,  StatusBar } from "react-native";

// PACKAGES
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Search from "react-native-vector-icons/Feather";
import { withNavigation } from "react-navigation";

class Description extends Component {
  state = {
    description: ""
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.description.title,
    headerTitleStyle: { textAlign: "center", flex: 1 },
    headerStyle: {
      backgroundColor: "#FFDD0D"
    },
    headerRight: (
      <View style={{ paddingRight: 10 }}>
        <Search name="search" color="black" size={25} />
      </View>
    )
  });

  componentWillMount = () => {
    const { navigation } = this.props;
    const params = navigation.state.params.description;
    this.setState({ description: params.description });
  };

  render() {
    const { description } = this.state;
    return (
      <Container>
        <StatusBar backgroundColor="#FFDD0D"/>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {description}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Description);
