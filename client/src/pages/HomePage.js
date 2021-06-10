import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

import {Navbar} from "../components/Navbar/Navbar";
import {Navigation} from "../components/Navigation/Navigation";

export const HomePage = (props) => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div>
            <Navbar title={'Home'}/>
        </div>
    )
}