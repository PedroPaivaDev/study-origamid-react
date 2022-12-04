import React from 'react'

const Produto = ({produto}) => {
  return (
    <div>
        <h1>{produto.nome}</h1>
        <p>R$ {produto.preco}</p>
        {produto.fotos.map(({src, titulo}, index) => {
            return <img key={index} src={src} alt={titulo} />
        })}
    </div>
  )
}

export default Produto