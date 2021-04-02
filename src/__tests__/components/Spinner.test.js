import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { render } from '../test-utils';

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});