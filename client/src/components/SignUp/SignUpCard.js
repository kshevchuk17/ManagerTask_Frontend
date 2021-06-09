import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './style.scss'
import {AuthContext} from '../../context/AuthContext'
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'


export const SignUpCard = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        username: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/users/', 'post', {...form})
            message(data.message)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div id="Login-appRoot">
            <title>ManagerTask</title>
            <div className="SignUpCardLayout">
                <div className="SignUpCardLayout_card">
                    <a className="Title">
                        <h2>Tasks Manager</h2>
                    </a>
                    <div className="SignUpDefaultView">
                        <form className="SignUpEmailPasswordForm">
                            <div className="SignUpEmailPasswordForm_emailAndPassword">
                                <span
                                    className="PasswordAndEmailLabel">Email address</span>
                                <input type="text" className="InputEmailAndPassword"
                                       name="username" value={form.username} onChange={changeHandler} autoComplete="username"
                                       autoFocus/>
                                <span className="PasswordAndEmailLabel">Password</span>
                                <input type="password" className="InputEmailAndPassword" name="password"
                                       value={form.password}
                                       onChange={changeHandler} autoComplete="current-password"
                                />
                            </div>
                            <div className="SignUpButton"
                                 role="button" aria-disabled="false" onClick={registerHandler}>Sign Up
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}