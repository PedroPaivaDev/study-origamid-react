import React from 'react';
import Produto from './components/Produto';
import api from './services/api'

const App = () => {

  const [produto, setProduto] = React.useState();
  const [carregando, setCarregando] = React.useState()

  async function handleClick (event) {
    const nomeProduto = event.target.innerText
    const url = `https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`
    setCarregando(true)
    const dados = await api(url)
    setProduto(dados)
    setCarregando(false)
  }

  return (
    <>
      <button style={{marginRight: '.5rem'}} onClick={handleClick}>notebook</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && produto && <Produto produto={produto}/>}     
    </>
  )
};

export default App;
