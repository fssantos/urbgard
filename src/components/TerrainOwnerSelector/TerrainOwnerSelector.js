import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OPTION = {
    MINE: "MEU",
    SOMEONE_I_KNOW: "CONHEÇO",
    NOT_SURE: "NÃO SEI"

}

class TerrainOwnerSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: OPTION.MINE,
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
            <Text onPress={(e) => { props.clicked(props.option) }} style={styles.optionText}>{props.text}
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
    },
    optionButtonSelected: {
        width: '25%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#77D353',
    },
    optionButtonUnselected: {
        width: '25%',
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#969FAA',
    },
    optionText: {
        flex: 1,
        width: '100%',
        height: '50%',
        color: '#EBECEF',
        borderWidth: 0,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})



export default TerrainOwnerSelector;