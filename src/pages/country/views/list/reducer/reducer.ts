import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

export type countriesReducerAction =
  | {
      type: 'sortedData';
      payload: { sortedCountries: CountryType[] };
    }
  | { type: 'like'; payload: { id: string } }
  | { type: 'createCountry'; payload: { newCountry: CountryType } }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'updateCountry'; payload: { country: CountryType } }
  | {
      type: 'setCountries';
      payload: { countriesData: CountryType[] };
    };

export const countriesReducer = (
  countryList: CountryType[],
  action: countriesReducerAction,
) => {
  switch (action.type) {
    case 'sortedData': {
      return [...action.payload.sortedCountries];
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
      return [...action.payload.countriesData];
    }

    case 'updateCountry': {
      return countryList.map((country) =>
        country.id === action.payload.country.id
          ? action.payload.country
          : country,
      );
    }

    case 'delete': {
      return countryList.filter((country) => country.id !== action.payload.id);
    }
  }
};
