import { useQuery } from 'react-query';
import { QueryConfig } from 'src/lib/react-query';
import { getPerson } from './getPerson';

interface UseGetPersonOptions {
  _id: string;
  config?: QueryConfig<typeof getPerson>;
}

export const useGetPerson = (options: UseGetPersonOptions) => {
  const { _id, config } = options;

  return useQuery({
    queryKey: ['staff', { _id }],
    queryFn: () => getPerson(_id),
    ...config,
  });
};
