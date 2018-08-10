import {Navigation} from "react-native-navigation"

import AuthScreen from "./src/scenes/Auth/Auth";
//Register screens to navigate among them
Navigation.registerComponent("urbgard.AuthScreen", () => AuthScreen);

//Start the app here
Navigation.startSingleScreenApp({
    screen: {
        screen: "urbgard.AuthScreen",
        title: "Auth Screen"
    }
})