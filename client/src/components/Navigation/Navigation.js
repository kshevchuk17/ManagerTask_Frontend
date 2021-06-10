import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import './style.scss'

export const Navigation = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div id="asana_sidebar" className="TaskManager_Sidebar">
            <div className="Sidebar">
                <div className="SidebarHeader">
                    <a className="SidebarHeader_logo" href="/home/"/>
                    <div className="SidebarHeader_LinkIcon">
                        Task Manager
                    </div>
                </div>
                <div className="LinksList">
                    <div className="LinksList_content">
                        <a className="LinksList_element" href="/home/">
                            <span className="LinksList_element_name">
                                Home
                            </span>
                        </a>
                        <a className="LinksList_element" href="/my_tasks/">
                            <span className="LinksList_element_name">
                                MyTasks
                            </span>
                        </a>
                        <a className="LinksList_element" href="/projects/">
                            <span className="LinksList_element_name">
                                Projects
                            </span>
                        </a>
                        <a className="LinksList_element" href="/teams/">
                            <span className="LinksList_element_name">
                                Teams
                            </span>
                        </a>
                    </div>
                </div>
                <div className="LogoutContainer">
                    <div className="LogoutButton" role="button" onClick={logoutHandler}>
                        Log out
                    </div>
                </div>
            </div>
        </div>
    )
}