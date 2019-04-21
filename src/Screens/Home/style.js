import { StyleSheet, Dimensions } from "react-native";

const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;


export const styles = StyleSheet.create({
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
    },
    containerHeight:{
        height: "90%"
      }
  });