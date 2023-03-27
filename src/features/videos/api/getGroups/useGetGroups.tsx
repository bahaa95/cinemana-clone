import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getGroup } from './getGroups';

type UseGetGroupsOptions = {
  config?: QueryConfig<typeof getGroup>;
};

export const useGetGroups = (options: UseGetGroupsOptions = {}) => {
  const { config } = options;

  return useQuery({
    queryKey: ['groups'],
    queryFn: getGroup,
    ...config,
  });
};
