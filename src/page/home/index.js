import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import "../../App.css"

const Home = ({ booking }) => {
  const [bookingState, setBookingState] = useState(booking)
  const [minAge, setMinAge] = useState()
  const [maxAge, setMaxAge] = useState()

  const searchName = (e) => {
    const name = e.target.value
    const newState = booking.filter(b => b.name.includes(name))
    setBookingState(newState)
  }

  const filterAge = () => {
    const newState = booking.filter(b => (minAge <= b.age && b.age <= maxAge))
    setBookingState(newState)
  }

  useEffect(() => {
    if (minAge && maxAge) {
      filterAge()
    }
  }, [minAge, maxAge])

  if (booking.length === 0) return <Redirect to="/register" />
  return (
    <div className="content">
      <h1>Luxury Hotel</h1>
      <div className="text-between">
        <div>
          Search Age:
          <input className="search-age" placeholder="Min" onChange={e => setMinAge(e.target.value)} />
          To
          <input className="search-age" placeholder="Max" onChange={e => setMaxAge(e.target.value)} />
        </div>
        <input className="search" placeholder="Search Booking name ..." onChange={e => searchName(e)} />
      </div>
      <table className="fixed-header">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Booking name</th>
            <th>Age</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {
            bookingState.map(b => {
              return (
                <tr>
                  <td width="15%">{b.roomNumber}</td>
                  <td width="35%">{b.name}</td>
                  <td width="10%">{b.age}</td>
                  <td width="20%" className={b.isBooking ? "unavailable" : "available"} />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

const mapStateToProps = function (state) {
  return {
    booking: state.manageBooking.booking
  }
}

const HomeWithConnect = connect(mapStateToProps)(Home)
export default HomeWithConnect
