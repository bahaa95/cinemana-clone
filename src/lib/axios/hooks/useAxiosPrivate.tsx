import Axios from 'axios';
import { API_URL } from '@/config';
import { useAuth, useRefreshToken, isValidToken, RefreshTokenResponse } from '@/lib/auth';
import { notify } from '@/lib/notify';

export const useAxiosPrivate = () => {
  const { auth } = useAuth();
  const refreshToken = useRefreshToken();

  const axiosPrivate = Axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });

  axiosPrivate.interceptors.request.use(
    async (request) => {
      let refreshTokenResponse: RefreshTokenResponse | undefined;

      //* generate new access token if the current access token is invalid
      if (!isValidToken(auth?.accessToken)) {
        refreshTokenResponse = await refreshToken();
      }

      request.headers.Authorization = `Bearar ${
        refreshTokenResponse?.accessToken || auth?.accessToken
      }`;

      return request;
    },
    (error) => Promise.reject(error)
  );

  axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const message = (error?.response?.data?.message || error?.message) as string;
      notify({
        type: 'error',
        message: message,
      });

      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};
