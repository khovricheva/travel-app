import React from 'react';
import { render } from '../test-utils';
import Country from '../../components/Country/Country';
import { Route } from 'react-router-dom';

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(
      <Route path='/country/germany'>
        <Country />
      </Route>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
