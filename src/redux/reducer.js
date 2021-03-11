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
  searchQuery: '',
};

export const searchQueryReducer = (state = initialInputState, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY': {
      return {
        // ...state,
        searchQuery: action.value,
      };
    }
    default:
      return state;
  }
};
