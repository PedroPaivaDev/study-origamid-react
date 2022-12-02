import React from 'react';
import Produto from './Produto';
import Titulo from './Titulo';

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
    ];

    return (
        <div>
            <Titulo>Produtos</Titulo>
            <div>
                {
                    produtos.map((produto, index ) => (
                        <Produto produto={produto} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Produtos