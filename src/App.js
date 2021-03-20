import React, { Suspense, lazy } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { GlobalCountryContext } from './context/GlobalContext';
import CountrySearch from './components/Countries/CountrySearch';
// import NotFound from './components/NotFound/NotFound';
import Countries from './components/Countries/Countries';
// import Country from './components/Country/Country';

// const Countries = lazy(() => import('./components/Countries/Countries'));
const Country = lazy(() => import('./components/Country/Country'));
// const CountrySearch = lazy(() =>import('./components/Countries/CountrySearch'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  return (
    <div>
      <GlobalCountryContext>
        <Header />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/search/text=:slug" component={CountrySearch} />
            <Route path="/country/:slug" component={Country} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </GlobalCountryContext>
    </div>
  );
};

export default App;
