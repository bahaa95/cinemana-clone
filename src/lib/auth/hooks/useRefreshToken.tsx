import { axios } from 'src/lib/axios';
import { RefreshTokenResponse } from '../types';
import { useAuth } from './useAuth';

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refreshToken = async (): Promise<RefreshTokenResponse> => {
    const response = await axios.post<RefreshTokenResponse>(
      '/api/auth/refreshToken',
      {},
      {
        withCredentials: true,
      }
    );

    const data = response.data;
    setAuth({ ...data, authenticated: true });
    return data;
  };

  return refreshToken;
};
