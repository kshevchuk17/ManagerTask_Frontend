import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {RegisterPage} from './pages/RegisterPage'



export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                {/*<Redirect path="/"/>*/}
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
        </Switch>
    )
}