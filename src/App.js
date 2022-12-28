import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import { UserStorage } from './contexts/UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Photo from './components/Photo/Photo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login/*" element={<Login/>} />
            <Route 
              path="conta/*" 
              element={<ProtectedRoute><User/></ProtectedRoute>} 
            />
            <Route path="foto/:id" element={<Photo/>} />
          </Routes>
          <Footer />
        </UserStorage>        
      </BrowserRouter>
    </div>
  );
}

export default App;
