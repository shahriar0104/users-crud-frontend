import './App.css';
import Users from "./components/Users";
import {persistor, store} from "./state/store/store";
import React from "react";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Users/>
            </PersistGate>
        </Provider>
    );
}

export default App;
