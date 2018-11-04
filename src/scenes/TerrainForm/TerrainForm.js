import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Slider,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    TextInput,

} from "react-native";

import DatePicker from 'react-native-datepicker'


import ImagesSelector from "../../components/ImagesSelector/ImagesSelector";
import EntityTypeSelector from '../../components/EntityTypeSelector/EntityTypeSelector';
import CivelStatusSelector from '../../components/CivilStatusSelector/CivilStatusSelector';
import TerrainOwnerSelector from '../../components/TerrainOwnerSelector/TerrainOwnerSelector';
import LookingForSelector from '../../components/LookingForSelector/LookingForSelector';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMUCI from 'react-native-vector-icons/MaterialCommunityIcons';

class TerrainFormScreen extends Component {
    static navigatorStyle = { navBarHidden: true }
    state = {
        pickedImageArr: [
        ],
        civelStatus: null,
        terrainOwner: null,
        entityType: null,
        lookingFor: [],
        luminosity: 0.5,
        pollution: 0.5,
        fundationDate: "01-01-2018",
    }



    handleImagesSelectorChanged = (newImageArr) => {
        this.setState({
            pickedImageArr: newImageArr,
        })

    }

    handleEntityTypeChanges = (newEntityType) => {
        this.setState({
            entityType: newEntityType,
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

    handleLookingForChanges = (newLookingFor) => {
        this.setState({
            lookingFor: newLookingFor,
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
    renderDataPicker() {
        return (
            <View style={{}}>
                <Text style={styles.fieldTitle}>Fundação</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 35,
                    marginTop: 15,
                    alignItems: 'center',
                    marginBottom: 15,
                }}>
                    <IconFeather name="calendar" size={20} color="grey" />
                    <DatePicker
                        style={{ width: 150, }}
                        date={this.state.fundationDate}
                        mode="date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        showIcon={false}
                        customStyles={{
                            dateInput: {
                                marginLeft: 15,
                                borderColor: '#D15D5F',
                                borderRadius: 10,
                                height: 35,
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ fundationDate: date }) }}
                    />
                </View>
            </View >
        )
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
                            <View style={[styles.civelStatusWrapper, { marginBottom: 15 }]}>
                                <EntityTypeSelector onChanges={this.handleEntityTypeChanges} />
                            </View>
                            <Text style={styles.fieldTitle}>Espaço</Text>
                            <View style={styles.civelStatusWrapper}>
                                <CivelStatusSelector onChanges={this.handleCivelStatusChanges} />
                            </View>
                            <Text style={styles.fieldTitle}>Responsável/proprietário</Text>
                            <View style={styles.civelStatusWrapper}>
                                <TerrainOwnerSelector onChanges={this.handleTerrainOwnerChanges} />
                            </View>
                            {this.state.entityType === 'TERRENO' ?
                                <View>
                                    <Text style={styles.fieldTitle}>Luminosidade</Text>
                                    <View style={styles.sliderWrapper}>
                                        <IconFeather name="sun" size={20} color="grey" />
                                        <Slider
                                            thumbTintColor='#D15D5F'
                                            value={this.state.luminosity}
                                            minimumTrackTintColor={"#D15D5F"}
                                            maximumTrackTintColor={"#D15D5F"}
                                            style={{ width: 200 }} />
                                    </View>
                                    <Text style={styles.fieldTitle}>Poluição</Text>
                                    <View style={styles.sliderWrapper}>
                                        <IconMUCI name="car-side" size={20} color="grey" />
                                        <Slider
                                            thumbTintColor='#D15D5F'
                                            value={this.state.pollution}
                                            minimumTrackTintColor={"#D15D5F"}
                                            maximumTrackTintColor={"#D15D5F"}
                                            style={{ width: 200 }}
                                        />
                                    </View>
                                </View>
                                : null}
                            {this.state.entityType === 'HORTA' ?
                                <View>
                                    <View style={styles.textInputWrapper}>
                                        <TextInput
                                            placeholder={'Nome da horta'}
                                            style={styles.gardenNameInput}
                                            underlineColorAndroid='red'
                                        ></TextInput>
                                    </View>
                                    <View style={styles.textInputWrapper}>
                                        <TextInput
                                            placeholder={'Responsável'}
                                            style={styles.gardenNameInput}
                                            underlineColorAndroid='red'
                                        ></TextInput>
                                    </View>
                                    {this.renderDataPicker()}
                                    <View style={styles.textInputWrapper}>
                                        <TextInput
                                            placeholder={'WhatsApp para contato'}
                                            keyboardType='phone-pad'
                                            style={styles.gardenNameInput}
                                            underlineColorAndroid='red'
                                        ></TextInput>
                                    </View>
                                    <View style={styles.textInputWrapper}>
                                        <TextInput
                                            placeholder={'Número de Membros'}
                                            keyboardType='numeric'
                                            style={styles.gardenNameInput}
                                            underlineColorAndroid='red'
                                        ></TextInput>
                                    </View>
                                    <View>
                                        <Text style={styles.fieldTitle}>Buscando</Text>
                                        <View style={styles.civelStatusWrapper}>
                                            <LookingForSelector onChanges={this.handleLookingForChanges} />
                                        </View>
                                    </View>
                                </View> :
                                null}
                            <TouchableOpacity style={styles.floatingButton} onPress={this.addTerainHandler}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>CADASTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </ImageBackground >
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
        marginTop: 10,
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
        marginBottom: 10,
    },
    floatingButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        width: "40%",
        height: 30,
        backgroundColor: '#92C551',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    sliderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 35,
        marginBottom: 25,
    },
    textInputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginBottom: 15,
    },

    gardenNameInput: {
        width: '60%',
        borderBottomColor: 'red',

    }

});


export default TerrainFormScreen;