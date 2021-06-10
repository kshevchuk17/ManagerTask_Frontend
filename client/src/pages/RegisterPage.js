import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {SignUpCard} from "../components/SignUp/SignUpCard"

export const RegisterPage = () => {
    const message = useMessage()
    const {error, clearError} = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div>
            <SignUpCard/>
        </div>
    )
}