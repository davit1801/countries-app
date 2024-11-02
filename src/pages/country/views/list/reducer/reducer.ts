import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

export type countriesReducerAction =
  | { type: 'sort'; payload: { sortType: string } }
  | { type: 'like'; payload: { id: string } }
  | { type: 'createCountry'; payload: { newCountry: CountryType } }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'setCountries'; payload: { countriesData: CountryType[] } };

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

    case 'setCountries': {
      return action.payload.countriesData;
    }

    case 'delete': {
      return countryList.filter((country) => country.id !== action.payload.id);
    }
  }
};
