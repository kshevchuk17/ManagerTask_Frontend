import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {SignUpCard} from "../components/SignUp/SignUpCard"

export const AuthPage = () => {
    const message = useMessage()
    const {error, clearError} = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    // const logoutHandler = event => {
    //     event.preventDefault()
    //     auth.logout()
    //     history.push('/')
    // }

    return (
        <div>
            <SignUpCard/>
        </div>
    )
}