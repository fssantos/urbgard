import React, { Component } from "react";
import { View, StyleSheet, Text, Slider, ScrollView, TouchableOpacity } from "react-native";

import ImagesSelector from "../../components/ImagesSelector/ImagesSelector";
import CivelStatusSelector from '../../components/CivilStatusSelector/CivilStatusSelector';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMUCI from 'react-native-vector-icons/MaterialCommunityIcons';

class TerrainFormScreen extends Component {
    state = {
        pickedImageArr: [
        ],
        civelStatus: null,
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
        if (pickedImageArr.length === 0) {
            alert('O terreno deve ter pelo menos uma imagem');
            return false;
        }

        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fieldTitle}>Imagens</Text>
                <View style={styles.galleryWrapper}>
                    <ImagesSelector onChanges={this.handleImagesSelectorChanged} />
                </View>
                <Text style={styles.fieldTitle}>Proprietário do Terreno</Text>
                <View style={styles.civelStatusWrapper}>
                    <CivelStatusSelector onChanges={this.handleCivelStatusChanges} />
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

                <TouchableOpacity style={styles.floatingButton} onPress={this.addTerainHandler}
                ><Text style={{ color: "white", fontWeight: "bold" }}>COMEÇAR HORTA AQUI</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        marginTop: 25,
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
        marginBottom: 5,
        marginLeft: 10,

    },
    civelStatusWrapper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        height: 75,
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
        marginTop: 40,
    },
    sliderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 35,
        marginBottom: 30,
    }

});


export default TerrainFormScreen;