import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {Navbar} from "../components/Navbar/Navbar";
import {AuthContext} from '../context/AuthContext'
import {ProjectsList} from "../components/ProjectList/ProjectsList";


export const ProjectsPage = () => {
    const [Projects, setProjects] = useState([])
    const {token} = useContext(AuthContext)
    const message = useMessage()
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        name: '', discord_url: '', managers: []
    })

    const getProjects = useCallback(async () => {
        const res = await request('/api/v1/project/all/',  'get', null, {
            Authorization: `Bearer ${token.access}`
        })
        setProjects(res)
    }, [token, request])

    useEffect(() => {
        getProjects()
    }, [])


    const CreateProject = async () => {
        try{
            const res = await request('/api/v1/project/create/',  'post', form, {
                Authorization: `Bearer ${token.access}`
            })
        } catch (e) { }
    }

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Navbar title={'Projects'}/>
            <ProjectsList/>
        </div>
    )
}