import React from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../service/api';

const Produto = () => {
    const [product, setProduct] = React.useState();
    const params = useParams();

    React.useEffect(() => {
        const data = async () => {
            const dataProducts = await getProducts(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
            setProduct(dataProducts);
        }
        data();
    }, []);

    return (
        <>
            {!product ? <p>carregando...</p> : <div style={{display:'flex', gap: '2rem'}}>
                <img src={product.fotos[0].src} style={{borderRadius: '1rem'}}/>
                <div>
                    <h2>{product.nome}</h2>
                    <p>{product.preco}</p>
                    <p>{product.descricao}</p> 
                </div>
            </div>}
        </>
  )
}

export default Produto