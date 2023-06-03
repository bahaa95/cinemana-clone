import { useQuery } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { QueryConfig } from 'src/lib/react-query';
import { TVideoItem } from '../../types';

type GetFavorites = () => Promise<TVideoItem[]>;

interface UseGetFavoritesOptions {
  config?: QueryConfig<GetFavorites>;
}

export const useGetFavorites = (options: UseGetFavoritesOptions = {}) => {
  const { config } = options;
  const axios = useAxiosPrivate();

  const getFavorites: GetFavorites = async () => {
    const response = await axios.get<TVideoItem[]>('/history/favorites');
    return response.data;
  };

  return useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
    ...config,
  });
};
