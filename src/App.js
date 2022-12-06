import React from 'react';
import Produto from './components/Produto';
import { GlobalStorage } from './contexts/GlobalStorage';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
