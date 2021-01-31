import React from 'react'
import { Route } from 'react-router-dom'
import Home from './page/home'
import CheckIn from './page/checkIn'
import CheckOut from './page/checkout'
import Sidebar from './common/sidebar'
import Keycard from './page/keycard'
import Register from './page/register'

import "./App.css"

const Homepage = () => <Home />
const CheckInPage = () => <CheckIn />
const CheckOutPage = () => <CheckOut />
const KeycardPage = () => <Keycard />
const RegisterPage = () => <Register />

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Route path="/home" component={Homepage} />
        <Route path="/checkin" component={CheckInPage} />
        <Route path="/checkout" component={CheckOutPage} />
        <Route path="/keycard" component={KeycardPage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    </>
  )
}

export default App