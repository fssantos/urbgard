import React from "react";

import MapView from "react-native-maps";

import { PIN_COLORS, STATUS } from "../../utils/constants";


export const Pin = (props) => {
    const { status, ...others } = props;
    return (
        <MapView.Marker {...others} pinColor={definePinColorBasedOnPinState(status)} />
    );
}

definePinColorBasedOnPinState = (status) => {
    switch (status) {
        case STATUS.UNAVAILABLE:
            return PIN_COLORS.RED;
        case STATUS.WAITING_APPROVAL:
            return PIN_COLORS.YELLOW;
        case STATUS.APPROVED:
            return PIN_COLORS.GREEN;
        default: return PIN_COLORS.RED;
    }
}