import React from 'react';
import { createContext } from 'react';

export const ProductContext = createContext({});

export const ProductProvider = (props) => {
    const [products, setProducts] = React.useState();

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}