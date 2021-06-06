import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import './index.scss'
import {AuthContext} from '../../context/AuthContext'

export const Index = () => {
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
            <div className="LoginCardLayout">
                <div className="LoginCardLayout-card--withCaptchaNotice LoginCardLayout-card">
                    <div className="LoginDefaultView-content">
                        <div className="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton
                            AbstractThemeableRectangularButton--xlarge SecondaryButton GoogleSignInButton--sparse
                            GoogleSignInButton LoginDefaultView-ssoButton" role="button" tabIndex="0">
                            <svg
                                className="AbstractThemeableRectangularButton-leftIcon GoogleSignInButton-logo--sparse GoogleSignInButton-logo"
                                viewBox="0 0 18 18">
                                <path
                                    d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,
                                    7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,
                                    12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,
                                    15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,
                                    9.20454545 L17.64,9.20454545 Z"
                                    fill="#4285F4"/>
                                <path
                                    d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,
                                    13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,
                                    14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,
                                    13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                                    fill="#34A853"/>
                                <path
                                    d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,
                                    9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,
                                    4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,
                                    10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,
                                    10.71 L3.96409091,10.71 Z"
                                    fill="#FBBC05"/>
                                <path
                                    d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,
                                    4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,
                                    0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,
                                    7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                                    fill="#EA4335"/>
                            </svg>
                            Login with Google
                        </div>
                        <span className="SeparatorRow LoginDefaultView-separatorRow">
                            <span className="SeparatorRow-horizontalLine"/>
                            <span className="SeparatorRow-label LoginDefaultView-separatorRowLabel">or</span>
                            <span className="SeparatorRow-horizontalLine"/>
                        </span>
                        <form className="LoginEmailPasswordForm">
                            <div className="LoginEmailPasswordForm-emailAndPassword">
                                <span
                                    className="Typography Typography--colorDarkGray1 Typography--s">Email address</span>
                                <input type="text" className="TextInputBase SizedTextInput SizedTextInput--medium TextInput
                                    LoginEmailPasswordForm-emailInput"
                                       name="e" value autoComplete="username" autoFocus services="[object Object]"/>
                                <span className="Typography Typography--colorDarkGray1 Typography--s">Password</span>
                                <div>
                                    <div className="OnBlurValidatedInput">
                                        <div className="ValidatedTextInput">
                                            <div className="ValidatedTextInput-inputContainer">
                                                <input type="password" className="TextInputBase SizedTextInput
                                                    SizedTextInput--medium TextInput ValidatedTextInput-input OnBlurValidateTextInput-input
                                                    LoginEmailPasswordForm-passwordInput" name="p" value
                                                       autoComplete="current-password"
                                                       services="[object Object]"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Ссылка на востановление пароля*/}
                            <div className="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton
                            AbstractThemeableRectangularButton--large NuxButton LoginEmailPasswordForm-logInButton"
                                 role="button" aria-disabled="false" tabiindex="0">Log in
                            </div>
                        </form>
                        <div className="LoginDefaultView-signUp">
                            <span
                                className="Typography Typography--colorDarkGray1 Typography--m">Don't have account?</span>
                            <a className="LoginDefaultView-signUpButtonLink PrimaryLink BaseLink" href="...">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}