import React from 'react';
import { render } from '../test-utils';
import Country from '../../components/Country/Country';

//test
describe('App component', () => {
  it('Renders correctly', () => {
    const defaultProps = {
      match: { params: { code: 'germany' } },
    };
    const wrapper = render(<Country {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
 

// const renderWithProps = (props) => {
//   const defaultProps = {
//     match: { params: { code: 'germany' } },
//   };
//   return render.create(<Country {...defaultProps} />);
// };

// test('should render', () => {
//   renderWithProps({});
//   expect(wrapper.toJSON()).toMatchSnapshot();
// });
