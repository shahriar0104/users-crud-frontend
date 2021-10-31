import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import postReducer from "./postReducer"

const rootReducer = combineReducers({
    studentReducer,
    postReducer
})

export default rootReducer