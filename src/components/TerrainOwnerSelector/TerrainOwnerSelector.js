import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OPTION = {
    MINE: "EU",
    SOMEONE_I_KNOW: "CONHEÇO",
    NOT_SURE: "NÃO SEI"

}

class TerrainOwnerSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
        }
    }


    resolveSelected = (option) => {
        const ret = option === this.state.selectedOption;
        return ret;

    }

    handleOnOptionPressed = (option) => {


        console.log(this.state.selectedOption);
        this.setState(prevState => {
            if (option === prevState.selectedOption) {
                return { selectedOption: null }
            }
            return { selectedOption: option }
        }, () => { this.props.onChanges(this.state.selectedOption) })
    }
    render() {
        return (
            <View style={styles.container}>
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.MINE)} text={OPTION.MINE} option={OPTION.MINE} />
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.SOMEONE_I_KNOW)} text={OPTION.SOMEONE_I_KNOW} option={OPTION.SOMEONE_I_KNOW} />
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.NOT_SURE)} text={OPTION.NOT_SURE} option={OPTION.NOT_SURE} />
            </View>
        )
    }
}

const Option = (props) => {
    return (
        <View
            style={props.isSelected ? styles.optionButtonSelected : styles.optionButtonUnselected}>
            <Text onPress={(e) => { props.clicked(props.option) }} style={props.isSelected ? styles.optionTextSelected : styles.optionTextUnselected}>{props.text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        marginTop: 5,
        marginBottom: 10,
    },
    optionButtonSelected: {
        width: '25%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D15D5F',
        borderRadius: 5,
        borderColor: '#D15D5F',
        borderWidth: 0.5,
    },
    optionButtonUnselected: {
        width: '25%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#D15D5F',
        borderWidth: 0.5,
    },
    optionTextSelected: {
        flex: 1,
        width: '100%',
        height: '50%',
        color: 'white',
        borderWidth: 0,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    optionTextUnselected: {
        flex: 1,
        width: '100%',
        height: '50%',
        color: '#D15D5F',
        borderWidth: 0,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})



export default TerrainOwnerSelector;