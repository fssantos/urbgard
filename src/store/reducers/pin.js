import {
  FETCH_PIN,
} from "../actions/actionTypes";

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIN:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;
