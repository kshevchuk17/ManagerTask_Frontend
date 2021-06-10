import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import './style.scss'

export const Navbar = (props) => {
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
                    <div className="PageName">{props.title}</div>
                </div>
            </div>
        </div>
    )
}