import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'


export const useRoutes = isAutentificated => {
    if (isAutentificated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect path="/" exact/>
        </Switch>
    )
}