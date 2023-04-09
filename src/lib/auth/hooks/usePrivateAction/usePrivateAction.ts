import { notify } from 'src/lib/notify';
import { useAuth } from '../useAuth';

export const usePrivateAction = () => {
  const { auth } = useAuth();

  const privateAction = async <T extends () => unknown>(action: T): Promise<void> => {
    if (auth.authenticated) {
      await action();
      return;
    }

    notify({ type: 'info', message: 'You must login to perform an action' });
    return;
  };

  return privateAction;
};
