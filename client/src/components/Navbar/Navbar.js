import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import './style.scss'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div className="TaskManager_Topbar">
            <div className="Topbar_pageHeader">
                <div className="Topbar_pageHeader_elements">
                    <h1 className="PageName">Home</h1>
                </div>
            </div>
        </div>
    )
}