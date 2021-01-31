import React from 'react'

import "../App.css"

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h1>Welcome To Hotel...</h1>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="checkin">Check In</a></li>
        <li><a href="checkout">Check Out</a></li>
      </ul>
      <h3>Admin management</h3>
      <ul>
        <li><a href="register">Hotel Register</a></li>
      </ul>
    </div>
  )
}

export default Sidebar