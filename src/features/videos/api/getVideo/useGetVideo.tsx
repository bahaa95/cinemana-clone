import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getVideo } from './getVideo';

interface UseGetVideoOptions {
  videoId: string;
  config?: QueryConfig<typeof getVideo>;
}

export const useGetVideo = (options: UseGetVideoOptions) => {
  const { videoId, config } = options;

  return useQuery({
    queryKey: ['video', { _id: videoId }],
    queryFn: () => getVideo(videoId),
    ...config,
  });
};
