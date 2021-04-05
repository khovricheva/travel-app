import React from 'react';
import { render } from '@testing-library/react';
import { GlobalCountryContext } from '../context/GlobalContext';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <GlobalCountryContext>{children}</GlobalCountryContext>
        </Switch>
      </Router>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
