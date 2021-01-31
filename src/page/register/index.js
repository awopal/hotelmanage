import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from "react-hook-form"
import { FieldInput } from '../../common/fieldInput'
import { Redirect } from 'react-router-dom'

import "../../App.css"

const Register = ({ dispatch }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = data => {
    var i, j
    const payload = []

    for (i = 1; i <= data.floor; i++) {
      var roomNumber
      for (j = 1; j <= data.room; j++) {
        if (!/^[0-9]{2}/.test(j)) {
          roomNumber = i.toString() + "0" + j.toString()
        } else {
          roomNumber = i.toString() + j.toString()
        }
        payload.push({
          roomNumber,
          name: '',
          age: '',
          isBooking: false
        })
      }
    }

    dispatch({
      payload,
      type: 'MANAGE_BOOKING'
    })

    setIsSuccess(true)
  }
  if (isSuccess) return <Redirect to="/home" />
  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <FieldInput label="Number of floor" name="floor" register={register({ required: true })} errors={errors} required />
        <FieldInput label="Number of room per floor" name="room" register={register({ required: true })} errors={errors} required />
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  )
}


const mapStateToProps = function (state) {
  return {
    booking: state.manageBooking
  }
}

const RegisterWithConnect = connect(mapStateToProps)(Register)
export default RegisterWithConnect
