import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import emailReducer from "./emailReducer";
import cvreducer from "./Cvreducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({ authReducer, errorsReducer,cvreducer,emailReducer,fileReducer });

export default rootReducer;