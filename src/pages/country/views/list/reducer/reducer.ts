import { CountryType } from '@/pages/country/views/list/reducer/state';

export type countriesReducerAction = {
  type: 'sort' | 'like' | 'createCountry' | 'delete';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const countriesReducer = (
  countryList: CountryType[],
  action: countriesReducerAction,
) => {
  switch (action.type) {
    case 'sort': {
      return [...countryList].sort((a, b) => {
        if (a.active !== b.active) {
          return a.active ? -1 : 1;
        }
        return action.payload.sortType === 'decrease'
          ? b.likes - a.likes
          : a.likes - b.likes;
      });
    }

    case 'like': {
      return countryList.map((country) =>
        country.id === action.payload.id
          ? { ...country, likes: country.likes + 1 }
          : country,
      );
    }

    case 'createCountry': {
      return [...countryList, action.payload.newCountry];
    }

    case 'delete': {
      return countryList.map((country) =>
        country.id === action.payload.id
          ? { ...country, active: !country.active }
          : country,
      );
    }
  }
};
