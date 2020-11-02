import React, { useState, createContext } from 'react'
import axios from 'axios'

import { USER_LOGIN } from '../../utils/config/API'

export const UserLoginContext = createContext()

export const UserLoginProvider = ({ children }) => {

    const [loginUser, setLoginUser] = useState({
        username: '',
        password: '',
        user: {},
        loggedIn: false,
        error: 'Error while logging in..',
        success: false,
        submitted: false
    })

    const inputControl = (e) => {
        e.persist()
        const { name, value } = e.target
        setLoginUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const fetchLoginData = (username, password) => {
        axios.post(`${USER_LOGIN}`, {
            username,
            password
        })
            .then((res) => {
                const { data } = res
                const { token } = res.data
                if (res.status === 200) {
                    localStorage.setItem('token', token)
                    setLoginUser((prevState) => ({ ...prevState, user: data, success: true, loggedIn: true }))
                } else {
                    console.error(res.statusText)
                }
            })
            .catch((error) => {
                if (error.response) {
                    // statuses 5xx, 4xx
                    console.log(`${error}`)
                }
                else if (error.request) {
                    // network errors
                    console.log(`${error}`)
                } else {
                    // anything else
                    console.log(`${error}`)
                }
            })
    }

    const fetchData = (e) => {
        e.preventDefault()
        setLoginUser({ submitted: true })
        fetchLoginData(loginUser.username, loginUser.password)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setLoginUser((user) => ({ ...user, loggedIn: false, user: {} }))
    }

    return (
        <UserLoginContext.Provider value={{ loginUser, setLoginUser, fetchData, inputControl, logoutUser }}>
            {children}
        </UserLoginContext.Provider>
    )
}