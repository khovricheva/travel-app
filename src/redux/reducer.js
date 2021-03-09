const initialLangState = {
  lang: 'English',
};

export const langReducer = (state = initialLangState, action) => {
  switch (action.type) {
    case 'ENGLISH': {
      return {
        lang: 'English',
      };
    }
    case 'RUSSIAN': {
      return {
        lang: 'Russian',
      };
    }
    case 'UKRAINIAN': {
      return {
        lang: 'Ukrainian',
      };
    }
    default:
      return state;
  }
};

const initialInputState = {
  countries: '',
};

export const countriesReducer = (state = initialInputState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES': {
      return {
        countries: action.value,
      };
    }

    default:
      return state;
  }
};
