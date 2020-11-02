import React, { useState, createContext } from 'react'
import axios from 'axios'

import {
    HOTEL_DATA,
    HOTEL_DETAILS,
    ADD_NEW_HOTEL,
    SPECIFIED_HOTEL_REVIEWS,
    GET_FAVORITES,
    FAVORITES_TOGGLE
} from '../../utils/config/API'

export const HotelContext = createContext()

export const HotelProvider = ({ children }) => {

    const [hotelData, setHotelData] = useState({
        data: {}
    })

    const getHotelsData = () => {
        const token = localStorage.getItem('token')
        axios.get(`${HOTEL_DATA}`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then((res) => {
                const { data } = res
                setHotelData((previousData) => ({ ...previousData, data }))
            })
            .catch((error) => {
                if (error.response) console.error(error)
                if (error.request) console.error(error)
            })
    }

    return (
        <HotelContext.Provider value={{ hotelData, getHotelsData }}>
            {children}
        </HotelContext.Provider>
    )
}