import React from 'react';
import Countries from '../../components/Countries/Countries';
import { render, screen } from '../test-utils';
import axios from 'axios';

jest.mock('axios');

const slides = sampleApiResponse();
const mockedAxiosGet = new Promise(() => ({ data: slides }));
axios.get.mockImplementation(() => mockedAxiosGet);

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = render(<Countries />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Loading component', () => {
    render(<Countries />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument;
  });
});

function sampleApiResponse() {
  return [
    {
      ID: '114',
      REFERENCE_DATE: '2018-07-02',
    },
    {
      ID: '114',
      REFERENCE_DATE: '2018-07-02',
    },
  ];
}
