import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../../../assets/styles/_dashboard.scss'
import { UserLoginContext, HotelContext } from '../../../helpers/contextAPI'

export const Dashboard = (props) => {

    const { loginUser } = useContext(UserLoginContext)
    const { hotelData, getHotelsData } = useContext(HotelContext)
    const { data } = hotelData || {}

    const { loggedIn } = loginUser || {}
    console.log(data)

    useEffect(() => {
        getHotelsData()
    }, [])

    if (!loggedIn) {
        return <div
            style={{
                display: 'flex',
                color: 'red',
                alignContent: 'center',
                marginTop: '200px',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '180px'
                }}>
                <h1 style={{ fontSize: '32px' }}>Welcome.</h1>
                <p>You need to register or login first to access Dashboard's content.</p>
                <div style={{ marginTop: '10px' }}>
                    <Link style={{ textDecoration: 'none', color: 'cadetblue' }} to="/register">Register</Link> <Link style={{ textDecoration: 'none', color: 'cadetblue' }} to="/login">Login</Link>
                </div>
            </div>
        </div>
    }

    return (
        <main className="dashboard-wrap">
            <section className="heading-box">
                <h1 className="heading">Hotels</h1>
            </section>
            <section className="data-box">{data.map((item) => (
                <section className="data">
                    <h1 className="data-name">{item.name} | {item.stars} - Stars</h1>
                    <section className="data-location">
                        <h2 className="data-city">{item.city},</h2>
                        <h2 className="data-country">{item.country}</h2>
                    </section>
                    <section className="image-box">
                        <img className="data-image" src={item.image} alt={`Hotel: ${item.id}`} height="500" width="800" />
                    </section>
                    <section className="description-box">
                        <p className="data-description">{item.description}</p>
                    </section>
                </section>
            ))}</section>
        </main>
    )
}
