import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import './login.css'
import {AuthContext} from '../context/AuthContext'

export const AuthCard = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div id="Login-appRoot">
            <title>ManagerTask</title>
            <div class="LoginCardLayout">
                <div class="LoginCardLayout-card--withCaptchaNotice LoginCardLayout-card">
                    <div class="LoginDefaultView-content">
                        <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton
                            AbstractThemeableRectangularButton--xlarge SecondaryButton GoogleSignInButton--sparse
                            GoogleSignInButton LoginDefaultView-ssoButton" role="button" tabIndex="0">
                            Login with Google
                        </div>
                        <span class="SeparatorRow LoginDefaultView-separatorRow">
                            <span class="SeparatorRow-horizontalLine"></span>
                            <span class="SeparatorRow-label LoginDefaultView-separatorRowLabel">or</span>
                            <span class="SeparatorRow-horizontalLine"></span>
                        </span>
                        <form class="LoginEmailPasswordForm">
                            <div class="LoginEmailPasswordForm-emailAndPassword">
                                <span class="Typography Typography--colorDarkGray1 Typography--s">Email address</span>
                                <input type="text" class="TextInputBase SizedTextInput SizedTextInput--medium TextInput
                                    LoginEmailPasswordForm-emailInput"
                                       name="e" value autoComplete="username" autoFocus services="[object Object]"/>
                                    <span class="Typography Typography--colorDarkGray1 Typography--s">Password</span>
                                    <div>
                                        <div class="OnBlurValidatedInput">
                                            <div class="ValidatedTextInput">
                                                <div class="ValidatedTextInput-inputContainer">
                                                    <input type="password" class="TextInputBase SizedTextInput
                                                    SizedTextInput--medium TextInput ValidatedTextInput-input OnBlurValidateTextInput-input
                                                    LoginEmailPasswordForm-passwordInput" name="p" value autoComplete="current-password"
                                                           services="[object Object]"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            {/*Ссылка на востановление пароля*/}
                            <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton
                            AbstractThemeableRectangularButton--large NuxButton LoginEmailPasswordForm-logInButton"
                                 role="button" aria-disabled="false" tabiindex="0">Log in</div>
                        </form>
                        <div class="LoginDefaultView-signUp">
                            <span class="Typography Typography--colorDarkGray1 Typography--m">Don't have account?</span>
                            <a class="LoginDefaultView-signUpButtonLink PrimaryLink BaseLink" href="...">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}