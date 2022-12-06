import React from 'react';
import fetchData from '../services/api'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [produtos, setProdutos] = React.useState()

    React.useEffect (() => {
        const data = async () => {
            const url = 'https://ranekapi.origamid.dev/json/api/produto/';
            const dadosProduto = await fetchData(url);
            setProdutos(dadosProduto)
        }
        data();
    }, [])

    const limparDados = () => {
        produtos && setProdutos()
    }

    return (
        <GlobalContext.Provider value={{ produtos, limparDados }}>
        {children}
        </GlobalContext.Provider>
    );
};
