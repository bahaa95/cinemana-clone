import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { SearchQuery } from '../../pages/search';
import { search } from './search';

interface useSearchOptions {
  query: Partial<SearchQuery>;
  config?: QueryConfig<typeof search>;
}

export const useSearch = (options: useSearchOptions) => {
  const { query, config } = options;

  return useQuery({
    queryKey: ['search', { ...query }],
    queryFn: () => search(query),
    ...config,
  });
};
