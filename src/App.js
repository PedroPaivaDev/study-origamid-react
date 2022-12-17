import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Login from './components/Login';
import Produto from './components/Produto';
import NaoEncontrado from './components/NaoEncontrado';
import ProdutoDescricao from './components/ProdutoDescricao';
import ProdutoAvaliacao from './components/ProdutoAvaliacao';
import ProdutoCustomizado from './components/ProdutoCustomizado';

const App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id' element={<Produto />} >
          <Route path='' element={<ProdutoDescricao />}/>
          <Route path='avaliacao' element={<ProdutoAvaliacao />}/>
          <Route path='customizado' element={<ProdutoCustomizado />}/>
        </Route>
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
