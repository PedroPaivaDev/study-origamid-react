import React from 'react'

const Input = ({ onChange, type, refe, children, value}) => {
  
  return (
    <>
      <label htmlFor={refe}>{children}</label>
      <input
        type={type}
        id={refe}
        name={refe}
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default Input