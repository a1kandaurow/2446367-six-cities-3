import axios from 'axios';

import type { AxiosInstance } from 'axios';

import { getToken } from './token';

const enum Default {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  return api;
};
