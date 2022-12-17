import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Header = () => {

  // const location = useLocation();
  // console.log(location)
  // const search = new URLSearchParams(location.search);

  // React.useEffect(() => {
  //   console.log('mudou a rota')
  // }, [location])

  return (
    <nav>
        <NavLink to='/' end>Home</NavLink>{` | `}
        <NavLink to='sobre'>Sobre</NavLink>{` | `}
        <NavLink to='login'>Login</NavLink>
    </nav>
  )
}

export default Header