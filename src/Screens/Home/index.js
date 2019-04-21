import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from "react-native";

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
import Grid from "react-native-grid-component";

const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;

export default class Home extends Component {
  state = {
    images: [
      "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    data: [
      {
        id: "a",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: "b",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: "c",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: "d",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: "e",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: "f",
        value:
          "https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    ]
  };

  static navigationOptions = {
    title: "Design Books",
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "#FFDD0D"
    }
  };

  _renderItem = v => {
    <TouchableOpacity onPress={() => alert("hmm")}>
      <Image source={{ uri: v }} style={{ width: 50, height: 100 }} />
    </TouchableOpacity>;
  };

  render() {
    const { images, data } = this.state;

    return (
      <View style={styles.container}>
        <View
          style={{
            height: "90%"
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.value }} style={styles.item} />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
        </View>
      </View>
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
  itemContainer: {
    width: size,
    height: size,
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  item: {
    flex: 1,
    margin: "5%",
    padding: "3%",
    backgroundColor: "lightblue"
  }
});
