import React from 'react'

const Contato = () => {
  return (
    <div style={{display:'flex', gap: '2rem'}}>
        <img src='http://placekitten.com/400/600' style={{borderRadius: '1rem'}} alt='foto'/>
        <div>
            <h2>Entre em contato.</h2>
            <p><span style={{color: '#dedede'}}>___ </span>pedro@origamid.com</p>
            <p><span style={{color: '#dedede'}}>___ </span>(37) 9 9999-9999</p>
            <p><span style={{color: '#dedede'}}>___ </span>Rua Ali Perto, 999</p> 
        </div>
    </div>
  )
}

export default Contato