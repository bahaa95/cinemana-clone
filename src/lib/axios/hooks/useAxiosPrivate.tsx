import Axios from 'axios';
import { API_URL } from 'src/config';
import { useAuth, useRefreshToken, isValidToken, RefreshTokenResponse } from 'src/lib/auth';
import { notify } from 'src/lib/notify';

interface Options {
  showNotify?: boolean;
}

export const useAxiosPrivate = (options: Options = {}) => {
  const { showNotify = false } = options;
  const { auth } = useAuth();
  const refreshTokenMutation = useRefreshToken();

  const axiosPrivate = Axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });

  axiosPrivate.interceptors.request.use(
    async (request) => {
      let refreshTokenResponse: RefreshTokenResponse | undefined;

      //* generate new access token if the current access token is invalid
      if (!isValidToken(auth?.accessToken)) {
        refreshTokenResponse = await refreshTokenMutation.mutateAsync(undefined);
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
      if (showNotify) {
        const message = (error?.response?.data?.message || error?.message) as string;
        notify({
          type: 'error',
          message: message,
        });
      }

      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};
