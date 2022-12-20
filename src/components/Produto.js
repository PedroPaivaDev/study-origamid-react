import React from 'react';
import styles from './Produto.module.css';
import Head from './Head';
import { useParams } from 'react-router-dom';
import getProducts from '../service/api';

const Produto = () => {
    const [product, setProduct] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const params = useParams();

    React.useEffect(() => {
        const data = async () => {
            try {
                setLoading(true);
                const dataProducts = await getProducts(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
                setProduct(dataProducts);
            } catch (err) {
                setError('Um erro ocorreu');
            } finally {
                setLoading(false);
            }
        }
        data();
    }, [params.id]);
    
    if (loading) return <div className='loading'></div>
    if (error) return <p>{error}</p>
    if (product===null) return null;
    if (product) return (           
        <section className={`${styles.produto} animeLeft`}>
            <Head title={params.id} description={product.descricao} />
            <div>{product.fotos.map(({src, titulo}) =>
                <img key={titulo} src={src} alt={titulo} />)}</div>            
            <div>
                <h1>{product.nome}</h1>
                <span className={styles.preco}>R$ {product.preco}</span>
                <p className={styles.descricao}>{product.descricao}</p> 
            </div>
        </section>
    );
}

export default Produto