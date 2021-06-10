import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {RegisterPage} from './pages/RegisterPage'
import {HomePage} from "./pages/HomePage";
import {TasksPage} from "./pages/TasksPage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {TeamsPage} from "./pages/TeamsPage";




export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/home/" exact>
                    <HomePage/>
                </Route>
                <Route path="/my_tasks/" exact>
                    <TasksPage/>
                </Route>
                <Route path="/projects/" exact>
                    <ProjectsPage/>
                </Route>
                <Route path="/teams/" exact>
                    <TeamsPage/>
                </Route>
                <Redirect path="/home/"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Route path="/signUp/">
                <RegisterPage/>
            </Route>
            {/*<Redirect to="/"/>*/}
        </Switch>
    )
}