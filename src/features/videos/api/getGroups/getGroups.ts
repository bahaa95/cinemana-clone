import { axios } from 'src/lib/axios';
import { Group } from '../../types';

export const getGroup = async (): Promise<Group[]> => {
  const response = await axios.get<Group[]>('/groups');
  return response.data;
};
