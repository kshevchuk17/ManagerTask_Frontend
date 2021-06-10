import React from "react"
import {BrowserRouter as Router, useHistory} from 'react-router-dom'
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar/Navbar'
import {Navigation} from "./components/Navigation/Navigation";


function App() {
    const {token, login, logout} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    return (
            <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
                <div style={{display: "flex", minHeight: "100vh", width: "100vw"}}>
                    {isAuthenticated && <Navigation/>}
                    <Router>
                        <div className="container">
                            {routes}
                        </div>
                    </Router>
                </div>
            </AuthContext.Provider>
    )
}

export default App;