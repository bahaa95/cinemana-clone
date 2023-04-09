import { useQuery } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { QueryConfig } from 'src/lib/react-query';
import { History } from '../../types';

type GetHistory = (videoId: string) => Promise<History>;

interface UseGetHistoryOptions {
  videoId: string;
  config?: QueryConfig<GetHistory>;
}

export const useGetHistory = (options: UseGetHistoryOptions) => {
  const { videoId, config } = options;
  const axios = useAxiosPrivate();

  const getHistory: GetHistory = async (videoId) => {
    const response = await axios.get(`history/videoId/${videoId}`);
    return response.data;
  };

  return useQuery({
    queryKey: ['history', { videoId }],
    queryFn: () => getHistory(videoId),
    ...config,
  });
};
