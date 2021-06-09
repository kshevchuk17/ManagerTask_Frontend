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
        <>
            <div id="asana_sidebar" className="TaskManager_Sidebar">
                <div className="Sidebar">
                    <div className="SidebarHeader">
                        <a aria-label="Task Manager"
                           className="SidebarHeader_logo"
                           href=""/>
                        <button className="SidebarHeader_LinkIcon" aria-label="Hide sidebar">
                            Task Manager
                        </button>
                    </div>
                    <div className="LinksList">
                        <div className="LinksList_content">
                            <button className="LinksList_element"
                                    aria-expanded="false"><span
                                className="LinksList_element_name">Home</span>
                            </button>
                            <button className="LinksList_element"
                                    aria-expanded="false"><span
                                className="LinksList_element_name">MyTasks</span>
                            </button>
                            <button className="LinksList_element"
                                    aria-expanded="false"><span
                                className="LinksList_element_name">Projects</span>
                            </button>
                            <button className="LinksList_element"
                                    aria-expanded="false"><span
                                className="LinksList_element_name">Teams</span>
                            </button>
                        </div>
                    </div>
                    <div className="LogoutContainer">
                        <div
                            className="LogoutButton"
                            role="button" onClick={logoutHandler}
                        >
                            Log out
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}