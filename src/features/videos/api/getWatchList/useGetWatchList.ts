import { useQuery } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { QueryConfig } from 'src/lib/react-query';
import { VideoItem } from '../../types';

type GetWatchList = () => Promise<VideoItem[]>;

interface UseGetWatchListOptions {
  config?: QueryConfig<GetWatchList>;
}

export const useGetWatchList = (options: UseGetWatchListOptions = {}) => {
  const { config } = options;
  const axios = useAxiosPrivate();

  const getWatchList: GetWatchList = async () => {
    const response = await axios.get<VideoItem[]>('/history/watchList');
    return response.data;
  };

  return useQuery({
    queryKey: ['watchList'],
    queryFn: getWatchList,
    ...config,
  });
};
