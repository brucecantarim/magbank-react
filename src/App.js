import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import './App.scss';

import posts from './data/posts';

const App = () => (
  <div className='App'>
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>
  </div>
);

export default App;
