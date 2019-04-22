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

    db.ref("Users/")
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

  uploadPDF = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()]
      },
      (error, res) => {
        // Android
        console.log(
          // res.uri, //uri 
          res.type, // mime type
          // res.fileName, //
          // res.fileSize //
        );
      }
    );
  };

  render() {
    const { data, isLoader } = this.state;
    const { itemContainer, container, containerHeight } = styles;

    return (
      <View style={container}>
        <StatusBar backgroundColor="#FFDD0D" />
        {/* {isLoader ? (
          <View>
            <ActivityIndicator size="large" color="black" />
          </View>
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
        )} */}
        <TouchableOpacity onPress={this.uploadPDF}>
          <Text>Upload PDF</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
