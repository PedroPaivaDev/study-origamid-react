import React from 'react';
import { GlobalContext } from '../contexts/GlobalStorage';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  const limparDados = () => {
    global.produtos && global.setProdutos()
  }

  return (
    <div>
        {global.produtos && <ul>{global.produtos.map((produto, index) => {
          return <li key={index}>{produto.nome}, preço: R$ {produto.preco}</li>
        })}</ul>}
      <button onClick={limparDados}>Ocultar Produtos</button>
    </div>
  );
};

export default Produto;
