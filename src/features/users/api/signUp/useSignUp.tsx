import { useMutation } from 'react-query';
import { MutationConfig } from 'src/lib/react-query';
import { signUp } from './signUp';

interface UseSignUpOptions {
  config?: MutationConfig<typeof signUp>;
}

export const useSignUp = (options: UseSignUpOptions = {}) => {
  const { config } = options;
  return useMutation({ mutationFn: signUp, ...config });
};
