import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { FieldInput } from '../../common/fieldInput'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import '../../App.css'

const CheckOut = ({ dispatch, booking }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSuccess, setIsSuccess] = useState(false)
  const notify = () => toast.error(` Room not found!`);

  const onSubmit = data => {
    const index = booking.findIndex(b => b.roomNumber === data.roomNumber && b.name === data.name)
    const newState = [...booking]
    newState[index] = { ...newState[index], "name": "", "age": "", "isBooking": false }

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
    return <Redirect to="/home" />
  }
  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Check Out...</h1>
        <FieldInput label="Keycard Number" name="roomNumber" register={register({ required: true })} errors={errors} required />
        <FieldInput label="Name" name="name" register={register({ required: true })} errors={errors} required />
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

const CheckOutWithConnect = connect(mapStateToProps)(CheckOut)
export default CheckOutWithConnect
