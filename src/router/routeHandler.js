import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import StudentList from '../components/students/StudentList'
import AddStudent from '../components/students/AddStudent'
import PostDetails from '../components/posts/PostDetails'
import Login from '../components/auth/Login'

function routeHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/studentlist' component={StudentList} />
                <Route exact path='/addstudent' component={AddStudent} />
                <Route exact path='/postdetails/:postid' component={PostDetails} />
            </Switch>
        </Router>
    )
}

export default routeHandler
