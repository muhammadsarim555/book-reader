import React, { Component } from "react";
import { Text, View, StatusBar, ActivityIndicator } from "react-native";

// PACKAGES
import Search from "react-native-vector-icons/Feather";
import { withNavigation } from "react-navigation";
import PDFView from "react-native-view-pdf";

// FILES
import {styles} from "./style";

class Description extends Component {
  state = {
    description: "",
    isLoader: false
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
    this.setState({ description: params.description, isLoader: true });
  };

  reloadPDF = e => {
    this.setState({ isLoader: e });
    console.log(this.ref, ":::");
  };

  render() {
    const { description, isLoader } = this.state;
    const { container, loader, pdf } = styles;

    return (
      <View style={container}>
        {isLoader && (
          <ActivityIndicator size="large" color="black" style={loader} />
        )}

        <PDFView
          style={pdf}
          onError={error => console.log("onError", error)}
          onLoad={() => this.reloadPDF(false)}
          ref="pdfRef"
          resource={description}
        />
      </View>
    );
  }
}

export default withNavigation(Description);
