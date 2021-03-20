const initialLangState = {
  langauge: 'English',
  code: 'en',
};

export const langReducer = (state = initialLangState, action) => {
  switch (action.type) {
    case 'ENGLISH': {
      return {
        langauge: 'English',
        code: 'en',
      };
    }
    case 'RUSSIAN': {
      return {
        langauge: 'Russian',
        code: 'ru',
      };
    }
    case 'UKRAINIAN': {
      return {
        langauge: 'Ukrainian',
        code: 'ua',
      };
    }
    default:
      return state;
  }
};
