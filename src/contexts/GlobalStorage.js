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

    return (
        <GlobalContext.Provider value={{ produtos, setProdutos }}>
        {children}
        </GlobalContext.Provider>
    );
};
