import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OPTION = {
    MEMBERS: "MEMBROS",
    MENTORS: "MENTORES",
}

class LookingForSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: [],
        }
    }


    resolveSelected = (option) => {
        const ret = this.state.selectedOption.includes(option);
        return ret;
    }

    handleOnOptionPressed = (option) => {
        this.setState(prevState => {
            if (prevState.selectedOption.includes(option)) {
                return { selectedOption: prevState.selectedOption.filter(e => e !== option) }
            }
            return {
                selectedOption: [...prevState.selectedOption, option]
            }
        }, () => { this.props.onChanges(this.state.selectedOption) })
    }
    render() {
        return (
            <View style={styles.container}>
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.MEMBERS)} text={OPTION.MEMBERS} option={OPTION.MEMBERS} />
                <Option clicked={this.handleOnOptionPressed} isSelected={this.resolveSelected(OPTION.MENTORS)} text={OPTION.MENTORS} option={OPTION.MENTORS} />
            </View>
        )
    }
}

const Option = (props) => {
    return (
        <View
            style={props.isSelected ? styles.optionButtonSelected : styles.optionButtonUnselected}>
            <Text onPress={(e) => { props.clicked(props.option) }} style={props.isSelected ? styles.optionTextSelected : styles.optionTextUnSelected}>{props.text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
    },
    optionButtonSelected: {
        width: '33%',
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
        width: '33%',
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
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    optionTextUnSelected: {
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



export default LookingForSelector;