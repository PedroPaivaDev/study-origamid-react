import React from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../service/api';
import './Produtos.css';

const Produtos = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    const data = async () => {
      const dataProduct = await getProducts('https://ranekapi.origamid.dev/json/api/produto');
      setProducts(dataProduct)
    }
    data();
  }, []);

  return (
    <>
      {!products ? <p>carregando...</p> : <div className='shop'>{products.map(({id, fotos, nome}) => {
        return (<div key={id}>
          <Link to={`/produto/${id}`}><img src={fotos[0].src} alt={id}/></Link>
          <h2>{nome}</h2>
        </div>)
      })}</div>}
    </>
  )
}

export default Produtos