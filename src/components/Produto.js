import React from 'react'

const Produto = ({produto}) => {
  return (
    <div style={{border: '1px solid black', padding: '20px', marginBottom: '10px'}}>
        <p>{produto.nome}</p>
        <ul>
            {produto.propriedades.map((prop, index) => {
                return <li key={index}>{prop}</li>
            })}
        </ul>
    </div>
  )
}

export default Produto