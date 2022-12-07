import React from 'react'

const LabelCheck = ({ value, checked, onChange, children}) => {
  
  return (
    <>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={checked(value)}
          onChange={onChange}
        />
        {children}
      </label>
    </>
  )
}

export default LabelCheck