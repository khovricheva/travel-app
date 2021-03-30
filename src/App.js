import React, { Suspense, lazy } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import { GlobalCountryContext } from './context/GlobalContext';
import CountrySearch from './components/Countries/CountrySearch';
import Countries from './components/Countries';
import Spinner from './components/Spinner';
const Country = lazy(() => import('./components/Country'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <>
      <GlobalCountryContext>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path='/' exact component={Countries} />
            <Route path='/search/text=:slug' component={CountrySearch} />
            <Route path='/country/:slug' component={Country} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </GlobalCountryContext>
    </>
  );
};

export default App;
