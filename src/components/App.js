import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LoginForm, Register, Landing, Navigation, Dashboard } from './'
import { UserLoginProvider, UserRegisterProvider, HotelProvider } from '../helpers/contextAPI'


export const App = () => {

    return (
        <main>
            <Router>
                <UserRegisterProvider>
                    <UserLoginProvider>
                        <HotelProvider>
                            <Navigation />
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/login' component={LoginForm} />
                                <Route path='/register' component={Register} />
                            </Switch>
                        </HotelProvider>
                    </UserLoginProvider>
                </UserRegisterProvider>
            </Router>
        </main >
    )
}
