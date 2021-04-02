import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
  }),
}));

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
