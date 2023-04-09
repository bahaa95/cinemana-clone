import { useMutation, useQueryClient } from 'react-query';
import { useAxiosPrivate } from 'src/lib/axios';
import { notify } from 'src/lib/notify';
import { MutationConfig } from 'src/lib/react-query';
import { History } from '../../types';

type Args = { videoId: string; favorite: History['favorite'] };
type EditFavorite = (args: Args) => Promise<History>;

interface UseEditHistory {
  videoId: string;
  config?: MutationConfig<EditFavorite>;
}

export const useEditFavorite = (options: UseEditHistory) => {
  const { videoId, config } = options;
  const queryClient = useQueryClient();
  const axios = useAxiosPrivate();

  const editFavorite: EditFavorite = async (args) => {
    const response = await axios.patch<History>(`/history?videoId=${args.videoId}`, {
      favorite: args.favorite,
    });
    return response.data;
  };

  return useMutation({
    mutationFn: editFavorite,
    onSuccess: (newHistory) => {
      queryClient.setQueryData(['history', { videoId }], newHistory);
      const message = newHistory.favorite ? 'Added to favorites' : 'Removed from favorites';
      notify({ type: 'success', message });
    },
    ...config,
  });
};
