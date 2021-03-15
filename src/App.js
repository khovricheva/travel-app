import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { GlobalCountryContext } from './context/GlobalContext';
import CountrySearch from './components/Countries/CountrySearch';

const App = () => {
  return (
    <div>
      <GlobalCountryContext>
        <Header />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/search/text=:slug" component={CountrySearch} />
          <Route path="/country/:slug" component={Country} />
        </Switch>
        <Footer />
      </GlobalCountryContext>
    </div>
  );
};

export default App;
