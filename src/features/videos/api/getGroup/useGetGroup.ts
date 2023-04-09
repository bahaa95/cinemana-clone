import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getGroup } from './getGroup';

interface UseGetGroupOptions {
  groupId: string;
  config?: QueryConfig<typeof getGroup>;
}

export const useGetGroup = (options: UseGetGroupOptions) => {
  const { groupId, config } = options;

  return useQuery({
    queryKey: ['groups', { _id: groupId }],
    queryFn: () => getGroup(groupId),
    ...config,
  });
};
