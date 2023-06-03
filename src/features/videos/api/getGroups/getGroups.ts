import { axios } from 'src/lib/axios';
import { IGroup } from '../../types';

export const getGroup = async (): Promise<IGroup[]> => {
  const response = await axios.get<IGroup[]>('/groups');
  return response.data;
};
