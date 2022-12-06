import React from 'react';
import { GlobalContext } from '../contexts/GlobalStorage';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
        {global.produtos && <ul>{global.produtos.map(produto => {
          return <li key={produto.id}>{produto.nome}, preço: R$ {produto.preco}</li>
        })}</ul>}
      <button onClick={global.limparDados}>Ocultar Produtos</button>
    </div>
  );
};

export default Produto;
