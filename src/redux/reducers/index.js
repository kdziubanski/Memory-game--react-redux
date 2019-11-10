import { combineReducers } from "redux";
import memoryReducer from "./memoryReducer";

const allReducers = combineReducers({ memoryReducer });

export default allReducers;
