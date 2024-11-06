import { httpClient } from '@/api';
import { CountryType } from '@/pages/country/views/list/reducer/CountriesState';

export const getCountries = async (): Promise<CountryType[] | undefined> => {
  try {
    const { data } = await httpClient.get<CountryType[]>('countries');

    return data;
  } catch (error) {
    console.log('Error fetching countries', error);
  }
};

export const getOneCountry = async (
  id: string,
): Promise<CountryType | undefined> => {
  try {
    const { data } = await httpClient.get<CountryType>(`countries/${id}`);

    return data;
  } catch (error) {
    console.log('Error fetching countries', error);
  }
};

export const addNewCountry = async (
  country: CountryType,
): Promise<CountryType | undefined> => {
  try {
    const { data } = await httpClient.post('/countries', country);
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
}): Promise<CountryType | undefined> => {
  try {
    const { data } = await httpClient.put(`/countries/${id}`, payload);

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
}): Promise<CountryType | undefined> => {
  try {
    const { data } = await httpClient.patch(`countries/${id}`, payload);

    return data;
  } catch (error) {
    console.error('Error updating likes:', error);
  }
};

export const deleteCountry = async (
  id: string,
): Promise<CountryType | undefined> => {
  try {
    const { data } = await httpClient.delete(`/countries/${id}`);

    return data;
  } catch (error) {
    console.error('Error deleting country:', error);
  }
};
