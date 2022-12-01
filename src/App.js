import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 100',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <>
      {produtos.map(({id, nome, preco, cores}) => {
        return (+preco.replace('R$', '')>1500 && <section key={id}>
          <h2>{nome}</h2>
          <p>Preço: {preco}</p>
          <ul>{cores.map(cor => (<li key={cor} style={{backgroundColor: cor}}>{cor}</li>))}</ul>
        </section>)
      })}
    </>
  );
};

export default App;
