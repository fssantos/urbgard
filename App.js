import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

import HomeScreen from "./src/scenes/Home/Home";
import TerrainFormScreen from "./src/scenes/TerrainForm/TerrainForm";
//Register screens to navigate among them
const store = configureStore();

Navigation.registerComponent("urbgard.HomeScreen", () => HomeScreen, store, Provider);
Navigation.registerComponent("urbgard.TerrainFormScreen", () => TerrainFormScreen, store, Provider);

import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';


Promise.all([
    IconIonicons.getImageSource('ios-link', 30),
    IconFeather.getImageSource('map-pin', 30),
    IconIonicons.getImageSource('ios-add-circle-outline', 30),
    IconIonicons.getImageSource('ios-notifications-outline', 30),
    IconFeather.getImageSource('user', 30),
]).then(source => {

    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '', // tab label as appears under the icon in iOS (optional)
                screen: 'urbgard.HomeScreen', // unique ID registered with Navigation.registerScreen
                icon: source[0], // local image asset for the tab icon unselected state (optional on iOS)
                title: 'Mapa', // title of the screen as appears in the nav bar (optional)
            },
            {
                label: '', // tab label as appears under the icon in iOS (optional)
                screen: 'urbgard.HomeScreen', // unique ID registered with Navigation.registerScreen
                icon: source[1], // local image asset for the tab icon unselected state (optional on iOS)
                title: 'Mapa', // title of the screen as appears in the nav bar (optional)
            },
            {
                label: '', // tab label as appears under the icon in iOS (optional)
                screen: 'urbgard.TerrainFormScreen', // unique ID registered with Navigation.registerScreen
                icon: source[2],
                title: '', // title of the screen as appears in the nav bar (optional)
                navigationBarStyle: { navBarHidden: true },
            },
            {
                label: '', // tab label as appears under the icon in iOS (optional)
                screen: 'urbgard.HomeScreen', // unique ID registered with Navigation.registerScreen
                icon: source[3], // local image asset for the tab icon unselected state (optional on iOS)
                title: 'Mapa', // title of the screen as appears in the nav bar (optional)
            },
            {
                label: '', // tab label as appears under the icon in iOS (optional)
                screen: 'urbgard.HomeScreen', // unique ID registered with Navigation.registerScreen
                icon: source[4], // local image asset for the tab icon unselected state (optional on iOS)
                title: 'Mapa', // title of the screen as appears in the nav bar (optional)
            },
        ],
    })

})


