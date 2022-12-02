import React from 'react';

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
    ];

    return (
        <div>
            <h3 style={{color: 'green'}}>Produtos</h3>
            <div>
                {
                    produtos.map(({nome, propriedades}, index ) => {
                        return (
                            <div key={index} style={{border: '1px solid black', padding: '20px', marginBottom: '10px'}}>
                                <p>{nome}</p>
                                <ul>
                                    {propriedades.map((prop, index) => {
                                        return <li key={index}>{prop}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Produtos