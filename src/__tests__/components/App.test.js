import React from 'react';
import { render } from '../test-utils';
import App from '../../App';

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
