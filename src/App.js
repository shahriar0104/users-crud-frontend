import { store } from "./state/store/store";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import StudentList from './components/students/StudentList';
import AddStudent from './components/students/AddStudent';
import PostDetails from './components/posts/PostDetails';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/studentlist' component={StudentList} />
                    <Route exact path='/addstudent' component={AddStudent} />
                    <Route exact path='/postdetails/:postid' component={PostDetails} />
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
