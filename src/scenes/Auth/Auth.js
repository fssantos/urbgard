import React, { Component } from "react"
import { View, Text, Button, Dimensions, StyleSheet } from "react-native"
import MapView from "react-native-maps";


class AuthScreen extends Component {

    state = {
        focusedLocation: {
            latitude: -30.0346,
            longitude: -51.2177,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122,
        }
    }

    pickLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                }
            }
        })
    }
    render() {
        return (
            <View>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    region={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: 250,
    }
});

export default AuthScreen;