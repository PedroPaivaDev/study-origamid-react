import React from 'react';
import Home from './components/Home';
import Produtos from './components/Produtos';

const App = () => {

  const handleClick = (event) => {
    event.preventDefault()
    return(event.target.innerText)
  }

  return (
    <>
      <li><a href='' onClick={handleClick}>Home</a></li>
      <li><a href='' onClick={handleClick}>Produtos</a></li>
      {handleClick === 'Produtos' ? <Produtos/> : <Home/>}
    </>
  )
};

export default App;
