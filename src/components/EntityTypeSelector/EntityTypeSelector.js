import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OPTION = {
    TERRAIN: "TERRENO",
    GARDEN: "HORTA",

}

class EntityTypeSelector extends Component {

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
        this.setState(prevState => {
            return { selectedOption: option }
        }, () => { this.props.onChanges(this.state.selectedOption) })
    }
    render() {
        return (
            <View style={styles.container}>
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.TERRAIN)} text={OPTION.TERRAIN} option={OPTION.TERRAIN} />
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.GARDEN)} text={OPTION.GARDEN} option={OPTION.GARDEN} />
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
        flex: 1,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        marginLeft: 50,
        marginRight: 50,
    },
    optionButtonSelected: {
        width: '40%',
        height: 35,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D15D5F',
        borderRadius: 5,
        borderColor: '#D15D5F',
        borderWidth: 0.5,
    },
    optionButtonUnselected: {
        width: '40%',
        height: 35,
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
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    optionTextUnselected: {
        flex: 1,
        width: '100%',
        height: '50%',
        color: '#D15D5F',
        borderWidth: 0,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})



export default EntityTypeSelector;