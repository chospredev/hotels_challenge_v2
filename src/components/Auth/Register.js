import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserRegisterContext } from '../../helpers/contextAPI'
import '../../assets/styles/_register.scss'

export const Register = () => {

    const { registerUser, inputControl, fetchData } = useContext(UserRegisterContext)
    const history = useHistory()

    if (registerUser.success) {
        history.push('/login', { from: 'Register' })
    }

    return (
        <main className="register">
            <section className="register-wrap">
                <h1>Account Register v2</h1>
                <form onSubmit={fetchData} className="form-wrap">
                    <input type="text" name="first_name" onChange={inputControl} value={registerUser.first_name} placeholder="First name" />
                    <input type="text" name="last_name" onChange={inputControl} value={registerUser.last_name} placeholder="Last name" />
                    <input type="text" name="username" onChange={inputControl} value={registerUser.username} placeholder="Username" />
                    <input type="email" name="email" onChange={inputControl} value={registerUser.email} placeholder="Email" />
                    <input type="password" name="password" onChange={inputControl} value={registerUser.password} placeholder="Password" />
                    <input type="password" placeholder="Confirm password" />
                    <button className="register-btn" onClick={fetchData} type="button">Register</button>
                </form>
            </section>
        </main>
    )
}
