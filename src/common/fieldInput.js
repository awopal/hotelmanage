import React from 'react'

import '../App.css'

export const FieldInput = ({
  register,
  label,
  name,
  required,
  errors,
  defaultValue,
  type,
}) => {

  return (
    <>
      {label &&
        <label>
          {label}:
          {required && <span>*</span>}
        </label>
      }
      <input
        name={name}
        defaultValue={defaultValue}
        ref={register}
        type={type}
        errors={errors}
        className={errors[name] && "input-field-error"}
      />
      <div className="errors-box">
        {errors[name] && "This Field is required!"}
      </div>
    </>
  )
}