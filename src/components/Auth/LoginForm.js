import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import '../../assets/styles/_login.scss'
import { UserLoginContext } from '../../helpers/contextAPI/'

export const LoginForm = () => {

    const { loginUser, fetchData, inputControl } = useContext(UserLoginContext)
    const { loggedIn, username, password, submitted } = loginUser || {}

    const history = useHistory()
    if (loggedIn) {
        history.push('/dashboard', { from: 'LoginForm' })
    }

    return (
        <main className="login">
            <section className="login-wrap">
                <h1>Account Login v2</h1>
                <form className="form-wrap">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={inputControl}
                        value={username}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={inputControl}
                        value={password}
                    />
                    <button className="login-btn" onClick={fetchData}>Login</button>
                </form>
            </section>
        </main>
    )
}
