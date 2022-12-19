import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Produto from './components/Produto';
import NaoEncontrado from './components/NaoEncontrado';
// import { ProductProvider } from './providers/ProductProvider';

const App = () => {
  
  return (
    <BrowserRouter>
      {/* <ProductProvider> */}
        <Header />
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='contato' element={<Contato />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='*' element={<NaoEncontrado />} />
        </Routes>
      {/* </ProductProvider> */}
    </BrowserRouter>
  );
};

export default App;
