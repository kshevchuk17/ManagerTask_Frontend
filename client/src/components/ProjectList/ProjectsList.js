import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
// import './root.css'
import './style.scss'
import {useHttp} from "../../hooks/http.hook";


export const ProjectsList = (props) => {
    const history = useHistory()
    const {token} = useContext(AuthContext)
    const {loading, request} = useHttp()
    const [Projects, setProjects] = useState([])
    const [Tasks, setTasks] = useState([])

    const getTasks = useCallback(async () => {
        const res = await request('/api/v1/project/tasks/assignee/all/', 'get', null, {
            Authorization: `Bearer ${token.access}`
        })
        console.log("tasks", res)
        setTasks(res)
    }, [token, request])

    useEffect(() => {
        getTasks()
    }, [])

    const getProjects = useCallback(async () => {
        const res = await request('/api/v1/project/all/', 'get', null, {
            Authorization: `Bearer ${token.access}`
        })
        setProjects(res)
    }, [token, request])

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div className="HubTileListQ">
            <div className="SortableList_itemContainer">
                <div className="SortableList_sortableItemContainer">
                    <div className="SortableList_sortableItem">
                        {Projects.map((item, id) =>(
                            <a className="PotTileQ" href="/project/detail/<int:pk>/">
                                <div className="TileStructureQ"
                                     title={item.name}>
                                    <div className="TileStructureQ_children">
                                        <div className="PotTileQ-card">
                                            <svg className="MultiColorIconQ" viewBox="0 0 24 24">
                                                <path className="MultiColorIconQ_path__fadedBlack"
                                                      d="M5,21H1c-0.6,0-1-0.4-1-0.9v-7.2C0,12.4,0.4,12,1,12h4c0.6,0,1,0.4,1,0.9v7.2C6,20.6,5.6,21,5,21z"/>
                                                <path className="MultiColorIconQ_path__white"
                                                      d="M5,9H1C0.4,9,0,8.6,0,8V4c0-0.5,0.4-1,1-1h4c0.6,0,1,0.5,1,1v4C6,8.6,5.6,9,5,9z M14,3h-4C9.4,3,9,3.5,9,4v12  c0,0.5,0.4,1,1,1h4c0.6,0,1-0.5,1-1V4C15,3.5,14.6,3,14,3z M23,3h-4c-0.5,0-1,0.5-1,1v4c0,0.6,0.5,1,1,1h4c0.5,0,1-0.4,1-1V4  C24,3.5,23.5,3,23,3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="TileStructureQ-name">{item.name}</div>
                                </div>
                            </a>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="NewPotTile">
                <a className="TileStructureQ" href="/project/create/" title="New Project">
                    <div className="TileStructureQ_children" >
                        <svg className="DashedTileQ AddItemSquircle-box" focusable="false"
                             viewBox="0 0 120 120">
                            <path
                                d="M99,119H21c-11,0-20-9-20-20V21C1,10,10,1,21,1h78c11,0,20,9,20,20v78C119,110,110,119,99,119z"
                                className="DashedTile-outer"/>
                            <path
                                d="M71,59H61V49c0-0.5-0.4-1-1-1s-1,0.4-1,1V59H49c-0.5,0-1,0.4-1,1s0.4,1,1,1H59V71c0,0.5,0.4,1,1,1s1-0.4,1-1V61H71c0.5,0,1-0.4,1-1S71.6,59,71,59z"
                                className="DashedTile-inner"/>
                        </svg>
                    </div>
                    <div className="TileStructureQ-name">New Project</div>
                </a>
            </div>
        </div>
    )
}