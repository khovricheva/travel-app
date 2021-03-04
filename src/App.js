import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Countries />
      <Footer />
    </div>
  );
};

export default App;
