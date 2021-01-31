import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { FieldInput } from '../../common/fieldInput'
import { connect } from 'react-redux'
import Keycard from '../keycard'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import '../../App.css'
import { Redirect } from 'react-router-dom'

const CheckIn = ({ dispatch, booking }) => {
  const { register, handleSubmit, errors } = useForm();
  const notify = () => toast.error(` Room not found!`);

  const [isSuccess, setIsSuccess] = useState(false)
  const [roomNo, setRoomNo] = useState()

  const onSubmit = data => {
    setRoomNo(data.roomNumber)

    const index = booking.findIndex(b => b.roomNumber === data.roomNumber)
    const newState = [...booking]
    newState[index] = { ...newState[index], "name": data.name, "age": data.age, "isBooking": true }

    const payload = newState

    if (index < 0) {
      notify()
    } else {
      dispatch({
        payload,
        type: 'MANAGE_BOOKING'
      })

      setIsSuccess(true)
    }
  }

  if (booking.length === 0) return <Redirect to="/register" />
  if (isSuccess) {
    return <Keycard roomNo={roomNo} />
  }
  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Check In...</h1>
        <FieldInput label="Room Number" name="roomNumber" register={register({ required: true })} errors={errors} required />
        <FieldInput label="Name" name="name" register={register({ required: true })} errors={errors} required />
        <FieldInput label="Age" type="number" name="age" register={register({ required: true })} errors={errors} required />
        <input type="submit" className="submit-btn" />
      </form>
      <ToastContainer />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    booking: state.manageBooking.booking
  }
}

const CheckInWithConnect = connect(mapStateToProps)(CheckIn)
export default CheckInWithConnect
