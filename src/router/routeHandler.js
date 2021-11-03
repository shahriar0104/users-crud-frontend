import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/home/Home'
import StudentList from '../components/users/StudentList'
import AddUser from '../components/users/AddUser'
import PostDetails from '../components/posts/PostDetails'
import Login from '../components/login/Login'
import TeacherList from "../components/users/TeacherList"

function routeHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/studentlist' component={StudentList} />
                <Route exact path='/teacherlist' component={TeacherList} />
                <Route exact path='/adduser' component={AddUser} />
                <Route exact path='/postdetails/:postid' component={PostDetails} />
            </Switch>
        </Router>
    )
}

export default routeHandler
