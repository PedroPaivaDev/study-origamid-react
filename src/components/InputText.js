import React from 'react';

const InputText = ({ id, label, setValue, ...props }) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </>
    );
};

export default InputText;