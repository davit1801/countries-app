import { httpClient } from '@/api';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

export const getCountries = async () => {
  try {
    const { data } = await httpClient.get<CountryType[]>('countries');

    return data;
  } catch (error) {
    console.log('Error fetching countries', error);
  }
};

export const getOneCountry = async (id: string) => {
  try {
    const { data } = await httpClient.get<CountryType>(`countries/${id}`);

    return data;
  } catch (error) {
    console.log('Error fetching countries', error);
  }
};

export const addNewCountry = async (country: CountryType) => {
  try {
    const { data } = await httpClient.post<CountryType[]>(
      '/countries',
      country,
    );
    return data;
  } catch (error) {
    console.error('Error creating country:', error);
  }
};

export const updateCountry = async ({
  id,
  payload,
}: {
  id: string;
  payload: CountryType;
}) => {
  try {
    const { data } = await httpClient.put<CountryType>(
      `/countries/${id}`,
      payload,
    );

    return data;
  } catch (error) {
    console.error('Error updating country:', error);
  }
};

export const encreaseLikes = async ({
  id,
  payload,
}: {
  id: string;
  payload: { likes: number };
}) => {
  try {
    const { data } = await httpClient.patch<CountryType>(
      `countries/${id}`,
      payload,
    );

    return data;
  } catch (error) {
    console.error('Error updating likes:', error);
  }
};

export const deleteCountry = async (id: string) => {
  try {
    const { data } = await httpClient.delete<CountryType>(`/countries/${id}`);

    return data;
  } catch (error) {
    console.error('Error deleting country:', error);
  }
};

export const sortCountries = async (sortOrder: string) => {
  try {
    console.log(sortOrder);
    const sortParam = sortOrder === 'decrease' ? '-likes' : 'likes';

    const { data } = await httpClient.get<CountryType[]>(
      `/countries?_sort=${sortParam}`,
    );

    return data;
  } catch (error) {
    console.error('Error fetching sorted countries:', error);
  }
};
