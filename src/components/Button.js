import React from 'react'

const Button = ({children, handleClick}) => {
  return (
    <button style={{marginRight: '15px'}} onClick={handleClick}>{children}</button>
  )
}

export default Button