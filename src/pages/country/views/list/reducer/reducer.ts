import { CountryType } from '@/pages/country/views/list/reducer/state';

export type countriesReducerAction = {
  type: 'sort' | 'like';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const countriesReducer = (
  countryList: CountryType[],
  action: countriesReducerAction
) => {
  switch (action.type) {
    case 'sort': {
      return [...countryList].sort((a, b) =>
        action.payload.sortType === 'decrease'
          ? b.likes - a.likes
          : a.likes - b.likes
      );
    }

    case 'like': {
      return countryList.map(country =>
        country.id === action.payload.id
          ? { ...country, likes: country.likes + 1 }
          : country
      );
    }
  }
};
