import { useMutation } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { notify } from 'src/lib/notify';
import { MutationConfig } from 'src/lib/react-query';
import { useAuth } from '../../index';

type LogOutApi = () => Promise<void>;

type UseLogOutOPtions = {
  config?: MutationConfig<LogOutApi>;
};

export const useLogOut = ({ config }: UseLogOutOPtions = {}) => {
  const axios = useAxiosPrivate();
  const { setAuth } = useAuth();

  const logOutApi: LogOutApi = async () => {
    await axios.post(`/api/auth/logout`);
  };

  return useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      setAuth({ authenticated: false, accessToken: '', email: '', username: '' });
      notify({ type: 'success', message: 'Logged out successfully.' });
    },
    ...config,
  });
};
