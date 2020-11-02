import React from 'react'
import { Link } from 'react-router-dom'

import '../../../assets/styles/_landing.scss'

export const Landing = () => {
    return (
        <main className="landing-wrap">
            <section className="landing-box">
                <h1 className="landing-welcome">Welcome.</h1>
                <p>To proceed to the Dashboard page, you will need to register or login first.</p>
                <section className="links">
                    <Link to="/register" className="register-link">Register</Link> <Link to="/login" className="login-link">Login</Link>
                </section>
            </section>
        </main>
    )
}
