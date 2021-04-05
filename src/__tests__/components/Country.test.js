import React from 'react';
import { render, screen } from '../test-utils';
import Country from '../../components/Country/Country';


describe('Country component', () => {

  const defaultProps = {
    match: { params: { code: 'germany' } },
  };

  it('Renders correctly', () => {
    const wrapper = render(<Country {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Loading component', () => {
    render(<Country {...defaultProps} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument;
  });

});
