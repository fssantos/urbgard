import React, { Component } from "react"
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native"
import MapView from "react-native-maps";
import { Markers } from "../../mockedData/Markers"
import { Pin } from "../../components/Pin/Pin";

import { fetchPin } from '../../store/actions/index';




class HomeScreen extends Component {

    state = {
        focusedLocation: {
            latitude: -30.0346,
            longitude: -51.2177,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122,
        },
        pickedImage: { uri: null },
    }

    componentDidMount() {
        console.log('DIDMOUNT')
        this.props.fetchPin();

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

    addTerainHandler = () => {
        this.props.navigator.push({
            screen: "urbgard.TerrainFormScreen",
            title: "Adicionar"
        })
    }
    render() {
        const { pin } = this.props;
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >
                    {pin.map((e, index) => {
                        return <Pin key={index} coordinate={e.coord} status={e.status}
                            title={e.title}
                            description={e.description} />
                    })}
                </MapView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",

    },
    map: {
        marginTop: 10,
        width: "95%",
        height: '100%',
    },
    button: {
        width: 50,
        height: 300,
    },
    imageWrapper: {
        width: "100%",
        height: 300,

    },
    floatingButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: "80%",
        height: 40,
        backgroundColor: '#990000',
        marginTop: 30,
    }
});

const mapStateToProps = (state) => {
    return {
        pin: state.pin.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPin: () => { dispatch(fetchPin()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

