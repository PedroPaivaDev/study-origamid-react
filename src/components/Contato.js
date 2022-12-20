import React from 'react';
import Head from './Head';
import styles from './Contato.module.css';
import foto from '../assets/contato.jpg';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Contato' description='Entre em contato' />
        <img src={foto} alt='máquina de escrever'/>
        <div>
            <h1>Entre em contato.</h1>
            <ul className={styles.dados}>
              <li>pedro@origamid.com</li>
              <li>(37) 9 9999-9999</li>
              <li>Rua Ali Perto, 999</li>
            </ul>
        </div>
    </section>
  )
}

export default Contato