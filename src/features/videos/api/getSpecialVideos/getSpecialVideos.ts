import { axios } from 'src/lib/axios';
import { TSpecialVideo } from '../../types';

export const getSpecialVideos = async () => {
  const response = await axios.get<TSpecialVideo[]>('/specials');
  return response.data;
};
