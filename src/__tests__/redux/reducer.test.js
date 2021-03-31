import langReducer from '../../redux/reducer';
import { ENGLISH, RUSSIAN, UKRAINIAN } from '../../redux/actiontypes';

describe('langReducer', () => {
  it('should return the initial state', () => {
    expect(langReducer(undefined, {})).toEqual({
      langauge: 'English',
      code: 'en',
    });
  });
  it('should handle English Langauge', () => {
    expect(
      langReducer(
        {},
        {
          type: ENGLISH,
        }
      )
    ).toEqual({
      langauge: 'English',
      code: 'en',
    });
  });
  it('should handle Russian Langauge', () => {
    expect(
      langReducer(
        {},
        {
          type: RUSSIAN,
        }
      )
    ).toEqual({
      langauge: 'Russian',
      code: 'ru',
    });
  });
  it('should handle Ukrainian Langauge', () => {
    expect(
      langReducer(
        {},
        {
          type: UKRAINIAN,
        }
      )
    ).toEqual({
      langauge: 'Ukrainian',
      code: 'ua',
    });
  });
});