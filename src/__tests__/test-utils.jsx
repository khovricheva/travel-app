import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

const customRender = (ui) =>
  render(ui, { wrapper: AllTheProviders });

export * from '@testing-library/react';

export { customRender as render };
