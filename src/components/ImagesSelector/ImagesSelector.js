import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

import imagePlaceholder from "../../mockedData/imageTest.jpg"
import ImagePicker from "./ImagePickerWorkaround";

const MAX_NUMBER_OF_IMAGES = 3;


class ImagesSelector extends Component {

    state = {
        pickedImageArr: []
    }


    pickImageHandler = () => {
        ImagePicker.showImagePicker(
            imPickerOptions
            , res => {
                if (res.didCancel) { console.log("User canceled") }
                else if (res.error) { console.log("Error:", res.error) }
                else {
                    this.setState(prevState => {
                        console.log(res);
                        return {
                            pickedImageArr: [
                                ...prevState.pickedImageArr,
                                {
                                    uri: res.uri,
                                    base64: res.data
                                }
                            ]
                        }
                    }, () => this.props.onChanges(this.state.pickedImageArr));
                }
            })
    }

    handleRemove = (id) => {
        this.setState(prevState => {
            return {
                pickedImageArr: [...prevState.pickedImageArr.filter((e, index) => index !== id)]
            }
        }, () => this.props.onChanges(this.state.pickedImageArr));

    }

    render() {
        console.log(this.state.pickedImageArr)

        return (
            <View style={styles.container}>
                {this.state.pickedImageArr.map((pickedImage, index) => {
                    return <Picker
                        showRemove={true}
                        pickedImage={pickedImage}
                        key={index}
                        id={index}
                        onRemove={this.handleRemove}
                        onPicker={this.pickImageHandler} />
                })}
                {this.state.pickedImageArr.length < MAX_NUMBER_OF_IMAGES ?
                    <Picker
                        showRemove={false}
                        pickedImage={null}
                        onPicker={this.pickImageHandler} />
                    : null}
            </View>
        )
    }
}

const Picker = (props) => {
    return < View style={styles.selectedImageWrapper} >
        <TouchableOpacity onPress={() => { props.pickedImage == null ? props.onPicker() : {} }} style={styles.imageWrapper}>
            <Image style={styles.image} source={props.pickedImage == null ? {} : props.pickedImage} />
        </TouchableOpacity>
        {props.showRemove ? <Text onPress={(e) => { props.onRemove(props.id) }} style={styles.removeButton}>x</Text> : null}
    </View >
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: "100%",
        marginLeft: 15,
    },
    selectedImageWrapper: {
        display: "flex",
        flexDirection: "row",
        width: 100,
        height: 100,
        margin: 0,
    },
    imageWrapper: {
        width: "70%",
        height: "70%",
        borderStyle: 'dashed',
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 0.5,
        alignSelf: 'center',

    },
    image: {
        width: "100%",
        height: "100%",
    },
    removeButton: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 20,
        color: "blue"
    },
});


const imPickerOptions = {
    title: 'Selecione uma imagem',
    takePhotoButtonTitle: 'Tirar uma foto',
    chooseFromLibraryButtonTitle: 'Escolher da galeria',
    cancelButtonTitle: 'cancelar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


export default ImagesSelector;
