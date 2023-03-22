import { QueryClient, DefaultOptions } from 'react-query';

const queryErrors = [401, 403, 500];
const mutationErrors = [401, 403, 500];

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: (error: any) => queryErrors.includes(error?.response?.status),
    refetchOnWindowFocus: false,
    retry: false,
  },
  mutations: {
    useErrorBoundary: (error: any) => mutationErrors.includes(error?.response?.status),
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
