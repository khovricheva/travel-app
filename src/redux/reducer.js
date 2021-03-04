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
