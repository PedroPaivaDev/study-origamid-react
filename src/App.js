import React from 'react';
import api from './services/api'

const App = () => {

  const urlNotebook = "https://ranekapi.origamid.dev/json/api/produto/notebook";
  const urlSmartphone = "https://ranekapi.origamid.dev/json/api/produto/smartphone";
  const urlTablet = "https://ranekapi.origamid.dev/json/api/produto/tablet"

  const [produto, setProduto] = React.useState({
    nome: '',
    preco: '',
    fotos: []
  })

  async function handleClick (url) {
    const dados = await api(url)
    setProduto(
      dados
    )
  }

  return (
    <>
      <button onClick={() => handleClick(urlNotebook)}>notebook</button>
      <button onClick={() => handleClick(urlSmartphone)}>smartphone</button>
      <button onClick={() => handleClick(urlTablet)}>tablet</button>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
      {produto.fotos.map(({src, titulo}, index) => {
        return <img key={index} src={src} alt={titulo} />
      })}
    </>
  )
};

export default App;
