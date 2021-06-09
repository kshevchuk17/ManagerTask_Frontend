import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {SignInCard} from "../components/SignIn/SignInCard";
import {SignUpCard} from "../components/SignUp/SignUpCard";

import {Navbar} from "../components/Navbar/Navbar";
import {Navigation} from "../components/Navigation/Navigation";

export const AuthPage = () => {
    const message = useMessage()
    const {error, clearError} = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div>
            {/*<Navbar/>*/}
            {/*<Navigation/>*/}
            <SignInCard/>
        </div>
    )
}