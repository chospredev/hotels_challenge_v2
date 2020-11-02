import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserLoginContext } from '../../helpers/contextAPI'
import '../../assets/styles/_navigation.scss'

export const Navigation = () => {

    const { loginUser, logoutUser } = useContext(UserLoginContext)
    const { loggedIn, user } = loginUser || {}

    return (
        <main className="navigation-wrapper">
            <Link to="/" className="heading">Hotel Challenge - v2</Link>
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link">{loggedIn && <div className="welcome-feedback">Welcome, <span className="username">{user.username}</span></div>}</Link>
                    </li>
                    <li className="nav-item">
                        {!loggedIn ? '' : '|'}
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        |
                    </li>
                    <li className="nav-item">
                        {loggedIn ? <a className="nav-link" href="https://chospre.com">Donate</a> : <Link to="/register" className="nav-link">Register</Link>}
                    </li>
                    <li className="nav-item">
                        |
                    </li>
                    <li className="nav-item">
                        {loggedIn ? <Link to="/login" onClick={logoutUser} className="nav-link">Logout</Link> : <Link to="/login" className="nav-link">Login</Link>}
                    </li>
                </ul>
            </nav>
        </main>
    )
}
