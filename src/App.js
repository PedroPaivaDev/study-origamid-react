import React from 'react';
import LabelCheck from './components/LabelCheck';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {

  const [cores, setCores] = React.useState([])

  function handleChange ({target}) {
    let checkCor = target.value;
    if (target.checked) {
      setCores([...cores, checkCor])
    } else {
      setCores(cores.filter(cor => cor !== checkCor))
    }
  }

  function handleChecked (cor) {
    return cores.includes(cor)
  }
  
  return (
    <form>
      {coresArray.map((cor, index) => (
        <LabelCheck key={index} value={cor} checked={handleChecked} onChange={handleChange}>{cor}</LabelCheck>
      ))}
      <p>Cores selecionadas: {cores.map((cor,index) => `${cor}, `)}</p>
    </form>
  );
};

export default App;
