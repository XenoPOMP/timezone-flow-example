import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

const apiDefaults: CreateAxiosDefaults = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
};

const axiosForApi = axios.create(apiDefaults);

export { axiosForApi };
