import { useMutation, useQueryClient } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { notify } from 'src/lib/notify';
import { MutationConfig } from 'src/lib/react-query';
import { History } from '../../types';

type Args = { videoId: string; watchList: History['watchList'] };
type EditWatchList = (args: Args) => Promise<History>;

interface UseEditWatchList {
  videoId: string;
  config?: MutationConfig<EditWatchList>;
}

export const useEditWatchList = (options: UseEditWatchList) => {
  const { videoId, config } = options;
  const queryClient = useQueryClient();
  const axios = useAxiosPrivate();

  // edit watchList api
  const editWatchList: EditWatchList = async ({ videoId, watchList }) => {
    const response = await axios.patch<History>(`/history?videoId=${videoId}`, {
      watchList,
    });
    return response.data;
  };

  return useMutation({
    mutationFn: editWatchList,
    onSuccess: (newHistory) => {
      queryClient.setQueryData(['history', { videoId }], newHistory);
      const message = newHistory.watchList ? 'Added to watchList' : 'Removed from watchList';
      notify({ type: 'success', message });
    },
    ...config,
  });
};
