import { Navigation } from "react-native-navigation"

import AuthScreen from "./src/scenes/Auth/Auth";
import TerrainFormScreen from "./src/scenes/TerrainForm/TerrainForm";
//Register screens to navigate among them
Navigation.registerComponent("urbgard.AuthScreen", () => AuthScreen);
Navigation.registerComponent("urbgard.TerrainFormScreen", () => TerrainFormScreen);

//Start the app here
Navigation.startSingleScreenApp({
    screen: {
        screen: "urbgard.AuthScreen",
        title: "Auth Screen"
    }
})