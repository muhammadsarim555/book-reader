import { createStackNavigator, createAppContainer } from "react-navigation";

// FILES
import * as Screens from "../Screens";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Screens.Home
  },
  Description: {
    screen: Screens.Description
  },
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
