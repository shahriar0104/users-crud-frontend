import { store } from "./state/store/store";
import React from "react";
import { Provider } from "react-redux";
import RouteHandler from './router/routeHandler'

function App() {
    return (
        <Provider store={store}>
            <RouteHandler/>
        </Provider>
    );
}

export default App;
