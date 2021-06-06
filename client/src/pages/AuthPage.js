import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
import {Index} from "../components/AuthCard";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        username: '', email: '', password: ''
    })

    const history = useHistory();


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        // window.M.updateTextFields()
    }, [])

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

    const loginHandler = async () => {
        try {
            const token = await request('/jwt/create/', 'POST', {...form})
            auth.login(token)
            history.push('/profile/detail/')
        } catch (e) {
        }
    }
    return (
        <div>
            <Index/>
        </div>
    )
}