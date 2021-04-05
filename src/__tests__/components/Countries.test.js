import React from 'react';
import Countries from '../../components/Countries/Countries';
import { render, screen } from '../test-utils';

describe('App component', () => {
  const countries = [
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
  ];
  it('Renders correctly', () => {
    const wrapper = render(<Countries countries={countries} />);
    expect(wrapper).toMatchSnapshot();
  });
});
