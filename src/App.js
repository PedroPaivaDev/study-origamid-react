import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Produto from './components/Produto';
import NaoEncontrado from './components/NaoEncontrado';
import Footer from './components/Footer';
// import { ProductProvider } from './providers/ProductProvider';

const App = () => {
  
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <ProductProvider> */}
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Produtos />} />
              <Route path='contato' element={<Contato />} />
              <Route path='produto/:id' element={<Produto />} />
              <Route path='*' element={<NaoEncontrado />} />
            </Routes>
          </div>
          <Footer />
        {/* </ProductProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
