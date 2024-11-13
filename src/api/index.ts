import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: '/api',
};

export const httpClient = axios.create(axiosConfig);

// import.meta.env.VITE_BASE_URL
