import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { MyContext } from './context';

const App = () => {
  return (
    <div>
      <MyContext>
        <Header />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/:slug" component={Country} />
        </Switch>
        <Footer />
      </MyContext>
    </div>
  );
};

export default App;
