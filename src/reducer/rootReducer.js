import {emplyeeReducer , singleEmplyee } from "./emplyee";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    emplyeeReducer, singleEmplyee
})
export default rootReducer