import { useAuth } from '../../index';
import { useLogOut as useLogOutApi } from './logOut';

type LogOutFn = () => Promise<void>;

export const useLogOut = (): LogOutFn => {
  const { auth } = useAuth();
  const logOutMutation = useLogOutApi();

  const logOut = async (): Promise<void> => {
    if (auth.authenticated) {
      await logOutMutation.mutateAsync(undefined);
      return;
    }
  };

  return logOut;
};
