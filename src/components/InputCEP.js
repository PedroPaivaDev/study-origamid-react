import React from 'react';

const InputCEP = ({label, id, value, setValue, ...props}) => {

    const [error, setError] = React.useState(null);
  
    function validateCep(value) {
      if (value.length === 0) {
        setError('Preencha um valor');
        return false;
      } else if (!/^\d{5}-?\d{3}$/.test(value)) {
        setError('Preencha um cep válido');
        return false;
      } else {
        setError(null);
        return true;
      }
    }
  
    function handleBlur({ target }) {
      validateCep(target.value);
    }
  
    function handleChange({ target }) {
      error && validateCep(target.value);
      setValue(target.value);
    }
  
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                {...props}
            />
            {error && <p style={({color:"red"})}>{error}</p>}
        </>
    );
};

export default InputCEP;