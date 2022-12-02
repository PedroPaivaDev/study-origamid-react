import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos';

const App = () => {
  const { pathname } = window.location;
  let pagina;


  // const handleClick = (event) => {
  //   event.preventDefault()
  //   return(event.target.innerText)
  // }

  return (
    <>
      <Header/>
      {pathname === '/produtos' ? <Produtos/> : <Home/>}
    </>
  )
};

export default App;
