import { combineReducers } from "redux";
import data from "./reducers/userReducer";

const rootReducer = combineReducers({
    users: data
})

export default rootReducer;