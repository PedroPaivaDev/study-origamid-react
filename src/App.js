import React from 'react';
import Button from './components/Button';
import Produto from './components/Product';

const App = () => {

  let storage = window.localStorage.getItem('produto')
  
  const [productId, setProductId] = React.useState(storage);

  if (productId) window.localStorage.setItem('produto', productId);

  const handleClick = (event) => {
    const target = event.target.innerText;
    setProductId(target);
  }

  return (
    <>
      <h1>Preferência: {productId}</h1>
      <Button handleClick={handleClick}>notebook</Button>
      <Button handleClick={handleClick}>smartphone</Button>
      <Button handleClick={handleClick}>tablet</Button>
      <Produto productId={productId} />
    </>
  )
};

export default App;
