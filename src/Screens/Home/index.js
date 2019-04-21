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

import Grid from "react-native-grid-component";

// FILES
import { db } from "../../Config/firebase";

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
    data: []
  };

  static navigationOptions = {
    title: "Design Books",
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "#FFDD0D"
    }
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = () => {
    const booksInfo = [];

    db.ref("Users/")
      .once("value")
      .then(snapshot => {
        let data = snapshot.val();
        for (let i in data) {
          booksInfo.push(data[i]);
        }
        this.setState({ data: booksInfo });
      })
      .catch(e => console.log(e));
  };

  addItem = () => {
    db.ref("Users/sdfksdhf388383/").set({
      image:
        "data:image/png;base64,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",
      title: "Javascript",
      id: 3,
      description:
        "JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript."
    });
  };

  changeRoute = e => {
    const nav = this.props.navigation;

    nav.navigate("Description", {description:e});
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
            renderItem={({ item, id }) => (
              <TouchableOpacity onPress={() => this.changeRoute(item)}>
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.item} />
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
