import React from 'react';
import fetchData from '../services/api';

const Product = ({productId}) => {

  const [product, setProduct] = React.useState();

  React.useEffect(() => {

    if (productId) {
      const url = `https://ranekapi.origamid.dev/json/api/produto/${productId}`;

      const data = async () => {
        const dataProduct = await fetchData(url);
        setProduct(dataProduct);
      }
      data();
    }
  }, [productId])

  return product && (
    <div>
        <h1>{product.nome}</h1>
        <p>R$ {product.preco}</p>
        {product.fotos.map(({titulo, src}, index) => {
          return <img key ={index} src={src} alt={titulo} />
        })}
    </div>
  )
}

export default Product