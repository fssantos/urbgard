import React, { Component } from "react"
import { View, Image, Button, Dimensions, StyleSheet } from "react-native"
import MapView from "react-native-maps";
import { Markers } from "../../mockedData/Markers"
import { Pin } from "../../components/Pin/Pin";

import imagePlaceholder from "../../mockedData/imageTest.jpg"
import ImagePicker from "./ImagePickerWorkaround";


class AuthScreen extends Component {

    state = {
        focusedLocation: {
            latitude: -30.0346,
            longitude: -51.2177,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122,
        },
        pickedImage: { uri: null },
    }

    pickLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
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

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    }
                }
            };
            this.pickLocationHandler(coordsEvent);
        },
            err => { console.log(err); alert("Não conseguimos pegar a sua localização. Tente novamente") })
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Selecione uma imagem"
        }, res => {
            if (res.didCancel) { console.log("User canceled") }
            else if (res.error) { console.log("Error:", res.error) }
            else {
                this.setState({
                    pickedImage: { uri: res.uri }
                })
            }
        })
    }
    render() {
        console.log(this.state.pickedImage);
        return (
            <View style={styles.container}>
                {/*                 <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >
                    {Markers.map((e, index) => {
                        return <Pin key={index} coordinate={e.coord} status={e.status}
                            title={e.title}
                            description={e.description} />
                    })}
                </MapView> */}
                <View style={styles.imageWrapper}>
                    <Image style={styles.imageWrapper} source={this.state.pickedImage} />
                </View>
                <Button style={styles.button} title={"Adicionar"} onPress={this.pickImageHandler}></Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
    },
    map: {
        width: "100%",
        height: 300,
    },
    button: {
        width: 50,
        height: 300,
    },
    imageWrapper: {
        width: "100%",
        height: 300,

    }
});

export default AuthScreen;