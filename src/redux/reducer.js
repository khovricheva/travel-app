import { ENGLISH, RUSSIAN, UKRAINIAN } from './actiontypes';

const langaugeState = {
  langauge: 'English',
  code: 'en',
};

const langReducer = (state = langaugeState, action) => {
  switch (action.type) {
    case ENGLISH: {
      return {
        langauge: 'English',
        code: 'en',
      };
    }
    case RUSSIAN: {
      return {
        langauge: 'Russian',
        code: 'ru',
      };
    }
    case UKRAINIAN: {
      return {
        langauge: 'Ukrainian',
        code: 'ua',
      };
    }
    default:
      return state;
  }
};

export default langReducer;
