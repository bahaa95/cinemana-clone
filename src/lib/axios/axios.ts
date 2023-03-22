import Axios from 'axios';
import { API_URL } from '@/config';
import { notify } from '@/lib/notify';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = (error?.response?.data?.message || error?.message) as string;
    notify({
      type: 'error',
      message: message,
    });

    return Promise.reject(error);
  }
);
