import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.scss'
import {AuthContext} from '../../context/AuthContext'
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'


export const SignUpCard = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/users/', 'POST', {...form})
            message(data.message)
        } catch (e) {
        }
    }

    return (
        <div id="Login-appRoot">
            <title>ManagerTask</title>
            <div className="LoginCardLayout">
                <div className="LoginCardLayout-card--withCaptchaNotice LoginCardLayout-card">
                    <a className="Typography Typography--colorDarkGray1 Typography--xl Typography--h1 Typography--textAlignCenter">
                        <h2>Task sManager</h2>
                    </a>
                    <div className="LoginDefaultView-content">
                        <form className="LoginEmailPasswordForm">
                            <div className="LoginEmailPasswordForm-emailAndPassword">
                                <span
                                    className="Typography Typography--colorDarkGray1 Typography--s">Email address</span>
                                <input type="text" className="TextInputBase SizedTextInput SizedTextInput--medium TextInput
                                    LoginEmailPasswordForm-emailInput"
                                       name="email" value={form.email} onChange={changeHandler} autoComplete="username"
                                       autoFocus/>
                                <span className="Typography Typography--colorDarkGray1 Typography--s">Password</span>
                                <div>
                                    <div className="OnBlurValidatedInput">
                                        <div className="ValidatedTextInput">
                                            <div className="ValidatedTextInput-inputContainer">
                                                <input type="password" className="TextInputBase SizedTextInput
                                                    SizedTextInput--medium TextInput ValidatedTextInput-input OnBlurValidateTextInput-input
                                                    LoginEmailPasswordForm-passwordInput" name="password"
                                                       value={form.password}
                                                       onChange={changeHandler} autoComplete="current-password"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton
                            AbstractThemeableRectangularButton--large NuxButton LoginEmailPasswordForm-logInButton"
                                 role="button" aria-disabled="false" onClick={registerHandler}>Sign Up
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}