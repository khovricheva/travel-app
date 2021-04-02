import React from 'react';
import Countries from '../../components/Countries/Countries';
import { render } from '../test-utils';

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(<Countries />);
    expect(wrapper).toMatchSnapshot();
  });
});