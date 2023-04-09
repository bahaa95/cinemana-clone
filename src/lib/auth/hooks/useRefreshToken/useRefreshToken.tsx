import { useMutation } from 'react-query';
import { axios } from 'src/lib/axios';
import { MutationConfig } from 'src/lib/react-query';
import { Copy } from 'src/types';
import { Auth } from '../../types';
import { useAuth } from '../useAuth';

type RefreshToken = () => Promise<RefreshTokenResponse>;
export type RefreshTokenResponse = Copy<Omit<Auth, 'authenticated'>>;

interface UseRefreshTokenOptions {
  config?: MutationConfig<RefreshToken>;
}

export const useRefreshToken = (options: UseRefreshTokenOptions = {}) => {
  const { config } = options;
  const { setAuth } = useAuth();

  const refreshToken = async (): Promise<RefreshTokenResponse> => {
    const response = await axios.post<RefreshTokenResponse>(
      '/users/refreshToken',
      {},
      {
        withCredentials: true,
      }
    );

    const data = response.data;
    setAuth({ ...data, authenticated: true });
    return data;
  };

  return useMutation({ mutationKey: ['refreshToken'], mutationFn: refreshToken, ...config });
};
