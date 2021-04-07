import React from 'react';
import { render, cleanup, screen } from '../test-utils';
import axiosMock from 'axios';
import App from '../../App';

afterEach(cleanup);

describe('App component', () => {
  const data = {
    data: [
      {
        name: {
          en: 'Austria',
          ru: 'Австрия',
          ua: 'Австрія',
        },
        capital: {
          en: 'Vienna',
          ru: 'Вена',
          ua: 'Відень',
        },
        flag: 'https://travel-api-git-main-imbatman.vercel.app/flag/1.svg',
        introPhoto:
          'https://travel-api-git-main-imbatman.vercel.app/countriesPhoto/1.jpg',
      },
    ],
  };
  
  it('mocking axios request', async () => {
    axiosMock.get.mockResolvedValueOnce(data);
    const wrapper = render(<App />);

    expect(screen.getByTestId('spinner', {}, { timeout: 2000 }))
      .toBeInTheDocument;

    expect(await screen.findByText('Austria', {}, { timeout: 2000 }))
      .toBeInTheDocument;

    expect(wrapper).toMatchSnapshot();
  });
});
