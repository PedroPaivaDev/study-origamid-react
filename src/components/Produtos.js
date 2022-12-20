import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';
import getProducts from '../service/api';

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
      {!products ? <p>carregando...</p> : 
      <section className={`${styles.produtos} animeLeft`}>{products.map(({id, fotos, nome}) => (
        <Link to={`/produto/${id}`} key={id}>
          <img src={fotos[0].src} alt={fotos[0].titulo}/>
          <h1 className={styles.nome}>{nome}</h1>
        </Link>
        ))}
        <Head title='Produtos' description='Nossos produtos' />
      </section>}
    </>
  )
}

export default Produtos