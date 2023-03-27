import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getSpecialVideos } from './getSpecialVideos';

interface UseGetSpecialVideosOptions {
  config?: QueryConfig<typeof getSpecialVideos>;
}

export const useGetSpecialVideos = (options: UseGetSpecialVideosOptions = {}) => {
  const { config } = options;

  return useQuery({
    queryKey: ['specialVideos'],
    queryFn: getSpecialVideos,
    ...config,
  });
};
