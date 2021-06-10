import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {SignInCard} from "../components/SignIn/SignInCard";

export const AuthPage = () => {
    const message = useMessage()
    const {error, clearError} = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div>
            <SignInCard/>
        </div>
    )
}