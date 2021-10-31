import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/rootRudcer";

const enhancer = applyMiddleware(thunkMiddleware)

export const store = createStore(rootReducer, composeWithDevTools(enhancer))