import { axios } from 'src/lib/axios';
import { IGroup } from '../../types';

export const getGroup = async (groupId: string): Promise<IGroup> => {
  const response = await axios.get<IGroup>(`/groups/_id/${groupId}`);
  return response.data;
};
