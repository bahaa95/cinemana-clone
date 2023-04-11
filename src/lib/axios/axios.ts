import Axios from 'axios';
import { API_URL } from 'src/config';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
