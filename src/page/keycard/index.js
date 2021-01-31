import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

const Keycard = ({ roomNo }) => {
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) return <Redirect to="/home" />
  return (
    <div className="content">
      <h2>Check In Successful!</h2>
      <div className="text">Guest room key card: </div>
      <div className="keycard" onClick={() => setIsSuccess(true)}>
        Welcome to Luxury Hotel!
          <div className="roomno">Room {roomNo}</div>
        <div className="barcode" />
      </div>
    </div>
  )
}

export default Keycard