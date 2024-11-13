import { httpClient } from '@/api';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

const errorMessage = 'Oops! Something went wrong. Please try again later.';

function getNextPageNumber(relType: string, pagination: string) {
  const regex = new RegExp(`<[^>]*[?&]_page=(\\d+)[^>]*>; rel="${relType}"`);
  const match = pagination.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

export const getCountries = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const res = await httpClient.get<CountryType[]>(
      `/countries?_page=${page}&_limit=${limit}`,
    );

    return {
      rows: res.data,
      nextOffset: getNextPageNumber('next', res.headers.link),
    };
  } catch (error) {
    console.log('Error fetching countries', error);
    throw errorMessage;
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
