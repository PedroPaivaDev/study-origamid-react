import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom'

const Header = () => {

  // const location = useLocation();
  // console.log(location)
  // const search = new URLSearchParams(location.search);

  // React.useEffect(() => {
  //   console.log('mudou a rota')
  // }, [location])

  return (
    <nav className={styles.header}>
      <ul>
        <li><NavLink className={styles.link} to='/' end>Produtos</NavLink></li>
        <li><NavLink className={styles.link} to='contato'>Contato</NavLink></li>
      </ul>  
    </nav>
  )
}

export default Header