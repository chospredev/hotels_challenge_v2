import React, { useState, createContext } from 'react'
import axios from 'axios'

import { USER_REGISTRATION } from '../../utils/config/API'

export const UserRegisterContext = createContext()

export const UserRegisterProvider = ({ children }) => {

    const [registerUser, setRegisterUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        user: {},
        submitted: false,
        success: false
    })

    const inputControl = (e) => {
        e.persist()
        const { name, value } = e.target
        setRegisterUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const fetchRegisterData = (first_name, last_name, username, email, password) => {
        axios.post(`${USER_REGISTRATION}`, {
            first_name,
            last_name,
            username,
            email,
            password,
        })
            .then((res) => {
                const { data } = res
                const { token } = res.data
                if (res.status === 200 || res.status === 201) {
                    localStorage.setItem('token', token)
                    setRegisterUser((prevState) => ({ ...prevState, user: data, success: true }))
                } else {
                    console.error(res.statusText)
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.error(err)
                }
                else if (err.request) {
                    console.error(err)
                }
                else {
                    console.error(err)
                }
            })
    }

    const fetchData = (e) => {
        e.preventDefault()
        setRegisterUser({ submitted: true })
        fetchRegisterData(registerUser.first_name, registerUser.last_name, registerUser.username, registerUser.email, registerUser.password)
    }

    return (
        <UserRegisterContext.Provider value={{ registerUser, setRegisterUser, inputControl, fetchData }}>
            {children}
        </UserRegisterContext.Provider>
    )
}