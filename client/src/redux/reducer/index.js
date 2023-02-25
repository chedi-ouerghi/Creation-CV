import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import emailReducer from "./emailReducer";
import cvreducer from "./Cvreducer"

const rootReducer = combineReducers({ authReducer, errorsReducer,cvreducer,emailReducer });

export default rootReducer;