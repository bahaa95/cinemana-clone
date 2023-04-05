import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getCategories } from './getCategories';

type UseGetCategoriesOptions = {
  config?: QueryConfig<typeof getCategories>;
};

export const useGetCategories = (options: UseGetCategoriesOptions = {}) => {
  const { config } = options;

  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...config,
  });
};
