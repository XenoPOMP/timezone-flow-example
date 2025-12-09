import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

import { env } from '@/utils/env';

const apiDefaults: CreateAxiosDefaults = {
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
};

const axiosForApi = axios.create(apiDefaults);

export { axiosForApi };
