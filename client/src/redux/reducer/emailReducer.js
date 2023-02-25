import { ADD_CONTACT } from "../ActionTypes/emailTypes";

const initialState = [];

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default emailReducer