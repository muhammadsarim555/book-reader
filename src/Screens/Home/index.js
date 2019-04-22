import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  Alert
} from "react-native";

// PACKAGES
import Menu from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/Feather";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";

// FILES
import { db } from "../../Config/firebase";
import { styles } from "./style";

const numColumns = 3;

export default class Home extends Component {
  state = {
    data: [],
    isLoader: true
  };

  static navigationOptions = {
    headerTitleStyle: { textAlign: "center", flex: 1 },
    title: "Design Book",
    headerStyle: {
      backgroundColor: "#FFDD0D"
    },
    headerRight: (
      <View style={{ paddingRight: 10 }}>
        <Search name="search" color="black" size={25} />
      </View>
    ),
    headerLeft: (
      <View style={{ paddingLeft: 10 }}>
        <Menu name="menu" color="black" size={25} />
      </View>
    )
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = () => {
    const booksInfo = [];

    db.database()
      .ref("Users/")
      .once("value")
      .then(snapshot => {
        let data = snapshot.val();
        for (let i in data) {
          booksInfo.push(data[i]);
        }
        this.setState({ data: booksInfo, isLoader: false });
      })
      .catch(e => console.log(e));
  };

  changeRoute = e => {
    const nav = this.props.navigation;

    nav.navigate("Description", { description: e });
  };

  uploadToPDF = (image, format) => {
    console.log(image, "karachi");
    return new Promise((resolve, reject) => {
      const blob = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function(e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });

      const storageRef = db.storage().ref();
      blob.then(result => {
        let imgRef = storageRef.child("/images/" + Math.random() + ".pdf");
        imgRef
          .put(result)
          .then(function(snapshot) {
            imgRef.getDownloadURL().then(function(url) {
              console.log("url", url);
              resolve(url);
            });
          })
          .catch(err => reject(err));
      });
    });
  };

  uploadPDF = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()]
      },
      (error, res) => {
        // Android
        this.uploadToPDF(res.uri)
          .then(s => {
            console.log(s);
          })
          .catch(e => {
            console.log(e);
          });
      }
    );
  };

  render() {
    const { data, isLoader } = this.state;
    const { itemContainer, container, containerHeight } = styles;

    return (
      <View style={container}>
        <StatusBar backgroundColor="#FFDD0D" />
        {isLoader ? (
            <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={containerHeight}>
            <FlatList
              data={data}
              renderItem={({ item, id }) => (
                <TouchableOpacity onPress={() => this.changeRoute(item)}>
                  <View style={itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.item} />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              numColumns={numColumns}
            />
          </View>
        )}
        <TouchableOpacity onPress={this.uploadPDF}>
          <Text>Upload PDF</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
