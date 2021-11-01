import './App.css';
import Users from "./components/Users";
import { persistor, store } from "./state/store/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import StudentList from './components/students/StudentList';
import AddStudent from './components/students/AddStudent';
import PostDetails from './components/posts/PostDetails';
import Login from './components/login/Login';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/studentlist' component={StudentList} />
                        <Route exact path='/addstudent' component={AddStudent} />
                        <Route exact path='/postdetails/:postid' component={PostDetails} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </PersistGate>
            </Provider>
        </Router>
    );
}

export default App;
