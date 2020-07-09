import React from 'react';
import Navbar from './components/Navbar';
import H1 from './components/H1';
import './App.scss';

const App = () => (
  <div className='App'>
    <Navbar />
    <H1
      title='Bem vindo ao Magbank!'
      subtitle='Sinta-se em casa! O seu dinheiro está seguro aqui.'
    />
  </div>
);

export default App;
