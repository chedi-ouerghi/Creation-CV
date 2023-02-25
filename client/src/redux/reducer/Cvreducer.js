import { GET_CVS, GET_ONE_CV } from "../ActionTypes/CvTypes";

const initialState = {
  Cvs: [],
  currentCv:{},

};

const cvreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CVS:
      return {
        ...state,
        Cvs: action.payload.CV
      };
    case GET_ONE_CV:
      return {
       
        ...state,
        currentCv: action.payload.CV,
      };
    default:
      return state;
  }
};

export default cvreducer;
