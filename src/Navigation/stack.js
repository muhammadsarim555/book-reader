import { createStackNavigator, createAppContainer } from "react-navigation";

// FILES
import * as Screens from "../Screens";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Screens.Home
  }
});

export default createAppContainer(AppNavigator);
