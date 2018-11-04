import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Slider,
    TouchableOpacity,
    ImageBackground,
    ScrollView

} from "react-native";

import ImagesSelector from "../../components/ImagesSelector/ImagesSelector";
import CivelStatusSelector from '../../components/CivilStatusSelector/CivilStatusSelector';
import TerrainOwnerSelector from '../../components/TerrainOwnerSelector/TerrainOwnerSelector';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMUCI from 'react-native-vector-icons/MaterialCommunityIcons';

class TerrainFormScreen extends Component {
    static navigatorStyle = { navBarHidden: true }
    state = {
        pickedImageArr: [
        ],
        civelStatus: null,
        terrainOwner: null,
        luminosity: 0.5,
        pollution: 0.5,
    }



    handleImagesSelectorChanged = (newImageArr) => {
        this.setState({
            pickedImageArr: newImageArr,
        })

    }

    handleCivelStatusChanges = (newCivelStatus) => {
        this.setState({
            civelStatus: newCivelStatus,
        })
    }


    handleTerrainOwnerChanges = (newTerrainOwner) => {
        this.setState({
            terrainOwner: newTerrainOwner,
        })
    }

    addTerainHandler = () => {

        if (!this.validateForm()) return false;

        console.log(this.state.pickedImageArr[0].base64);
    }


    validateForm = () => {
        const { pickedImageArr, civelStatus } = this.state;

        if (civelStatus === null) {
            alert('Escolha a situação do terreno')
            return false;
        }
        if (terrainOwner === null) {
            alert('Escolha sobre quem é o dono do terreno')
            return false;
        }

        if (pickedImageArr.length === 0) {
            alert('O terreno deve ter pelo menos uma imagem');
            return false;
        }

        return true;
    }

    render() {
        return (

            <ImageBackground
                resizeMode='cover'
                source={require('../../assets/background_map_image.png')}
                style={styles.imgBackground}>

                <View style={styles.container}>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>Localização: Campus Centro UFRGS</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator>
                        <View style={styles.formContainer}>
                            <Text style={styles.fieldTitle}>Imagens</Text>
                            <View style={styles.galleryWrapper}>
                                <ImagesSelector onChanges={this.handleImagesSelectorChanged} />
                            </View>
                            <Text style={styles.fieldTitle}>Terreno</Text>
                            <View style={styles.civelStatusWrapper}>
                                <CivelStatusSelector onChanges={this.handleCivelStatusChanges} />
                            </View>
                            <Text style={styles.fieldTitle}>Responsável/proprietário</Text>
                            <View style={styles.civelStatusWrapper}>
                                <TerrainOwnerSelector onChanges={this.handleTerrainOwnerChanges} />
                            </View>
                            <Text style={styles.fieldTitle}>Luminosidade</Text>
                            <View style={styles.sliderWrapper}>
                                <IconFeather name="sun" size={20} color="grey" />
                                <Slider
                                    value={this.state.luminosity}
                                    minimumTrackTintColor={"#F9A825"}
                                    maximumTrackTintColor={"#F9A825"}
                                    thumbTintColor={'#F57F17'}
                                    style={{ width: 200 }} />
                            </View>
                            <Text style={styles.fieldTitle}>Poluição</Text>
                            <View style={styles.sliderWrapper}>
                                <IconMUCI name="car-side" size={20} color="grey" />
                                <Slider
                                    value={this.state.pollution}
                                    minimumTrackTintColor={"#F9A825"}
                                    maximumTrackTintColor={"#F9A825"}
                                    thumbTintColor={'#F57F17'}
                                    style={{ width: 200 }}
                                />
                            </View>
                            <TouchableOpacity style={styles.floatingButton} onPress={this.addTerainHandler}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>CADASTRAR TERRENO</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        padding: 10,
        paddingBottom: 10,
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        width: "100%",
        height: "100%",
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
    },
    locationText: {
        color: 'grey',
    },
    formContainer: {
        display: "flex",
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 15,
    },
    fieldTitle: {
        fontSize: 14,
        marginLeft: 30,
        marginTop: 0,
        marginBottom: 0,
        color: '#59626C',
    },
    galleryWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        height: 100,
        marginBottom: 0,
        marginLeft: 10,

    },
    civelStatusWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        height: 50,
        marginBottom: 5,
    },
    floatingButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: "80%",
        height: 35,
        backgroundColor: '#990000',
        marginTop: 10,
        marginBottom: 20,
    },
    sliderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 35,
        marginBottom: 25,
    }

});


export default TerrainFormScreen;