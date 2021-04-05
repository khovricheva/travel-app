import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import CountrySearch from './components/Countries/CountrySearch';
import Countries from './components/Countries';
import Spinner from './components/Spinner';
import axios from 'axios'

const Country = lazy(() => import('./components/Country'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://travel-api-git-main-imbatman.vercel.app/all.json`
        );
        if (!isCancelled) {
          let timer = setTimeout(() => {
            setCountries(result.data);
            clearTimeout(timer);
          }, 1200);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();

    return () => (isCancelled = true);
  }, []);

  return (
    <>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Countries countries={countries} />}
            />
            <Route
              path="/search/text=:slug"
              render={() => <CountrySearch countries={countries} />}
            />
            <Route path="/country/:slug" component={Country} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
    </>
  );
};

export default App;
