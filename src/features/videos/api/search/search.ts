import { createSearchParams } from 'react-router-dom';
import { axios } from 'src/lib/axios';
import { SearchQuery } from '../../pages/search';
import { VideoItem } from '../../types';

export const search = async (query: Partial<SearchQuery>): Promise<VideoItem[]> => {
  const searchParams = createSearchParams(query).toString();

  const response = await axios.get<VideoItem[]>(`/search?${searchParams}`);
  return response.data;
};
