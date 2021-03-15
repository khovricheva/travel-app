import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Countries} />
        <Route path='/search/text=' component={Countries} />
        <Route path='/cozntry/:slug' component={Country} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
