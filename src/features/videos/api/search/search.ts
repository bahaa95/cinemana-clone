import { createSearchParams } from 'react-router-dom';
import { axios } from 'src/lib/axios';
import { SearchQuery } from '../../pages/search';
import { TVideoItem } from '../../types';

export const search = async (query: Partial<SearchQuery>): Promise<TVideoItem[]> => {
  const searchParams = createSearchParams(query).toString();

  const response = await axios.get<TVideoItem[]>(`/search?${searchParams}`);
  return response.data;
};
