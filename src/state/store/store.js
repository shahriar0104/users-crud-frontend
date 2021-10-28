import {persistReducer, persistStore} from "redux-persist";
import {applyMiddleware, createStore} from "redux";
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "../reducers/userReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)
const enhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(persistedReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);