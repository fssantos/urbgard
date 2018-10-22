import { FETCH_PIN } from './actionTypes';
import { Markers } from '../../mockedData/Markers';

export const fetchPin = () => {
    return {
        type: FETCH_PIN,
        payload: { data: Markers }
    };
};

