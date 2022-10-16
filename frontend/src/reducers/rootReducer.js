import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {user: userReducer, counter: countReducer});

