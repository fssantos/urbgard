import React, { Component } from "react"
import { connect } from 'react-redux';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    StyleSheet,
    Modal,
    Image,
} from "react-native"
import MapView from "react-native-maps";
import { Markers } from "../../mockedData/Markers"
import { Pin } from "../../components/Pin/Pin";

import imagePlaceHolder from '../../assets/terrain_placeholder.jpeg';


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
        isModalVisible: false,

    }

    componentDidMount() {
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
                            description={e.description}
                            onPress={() => { this.setState({ isModalVisible: true }) }}
                            onRequestClose={() => { this.setState({ isModalVisible: false }) }} />
                    })}
                </MapView>
                <Modal
                    style={{ flex: 1, borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'flex-end' }}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })} style={styles.bottomModal}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalImageWrapper}>
                                <Image style={styles.imageCover} source={imagePlaceHolder} />
                            </View>
                            <View style={styles.modalInformationsWrapper}>
                                <Text style={styles.modalInformationTexts}>Rua Fernandes Vieira, 605</Text>
                                <Text style={styles.modalInformationTexts}>Status: aguardando membros</Text>
                                <TouchableOpacity style={styles.modalButton} onPress={() => this.setState({ isModalVisible: false })}>
                                    <Text style={{ color: "white", fontWeight: "bold" }}>TERRENO APTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })} style={{ width: '100%', height: 80 }}></TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        height: "100%",

    },
    map: {
        marginTop: 10,
        width: "100%",
        height: '100%',
    },
    bottomModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    modalContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 110,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalImageWrapper: {
        width: '35%',
        height: '100%',
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        marginRight: 10,

    },
    imageCover: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    modalInformationsWrapper: {
        width: '65%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    modalInformationTexts: {
        marginBottom: 5,
    },
    modalButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.2)',
        width: "80%",
        height: 25,
        backgroundColor: '#D55056',
        marginTop: 10,
        marginBottom: 0,
    },
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

