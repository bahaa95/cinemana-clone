import { axios } from 'src/lib/axios';
import { SpecialVideo } from '../../types';

export const getSpecialVideos = async () => {
  const response = await axios.get<SpecialVideo[]>('/specials');
  return response.data;
};
