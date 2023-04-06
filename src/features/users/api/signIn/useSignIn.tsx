import { useMutation } from 'react-query';
import { MutationConfig } from 'src/lib/react-query';
import { signIn } from './signIn';

interface UseSignInOptions {
  config?: MutationConfig<typeof signIn>;
}

export const useSignIn = (options: UseSignInOptions = {}) => {
  const { config } = options;
  return useMutation({ mutationFn: signIn, ...config });
};
