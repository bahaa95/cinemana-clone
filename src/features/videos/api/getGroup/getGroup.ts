import { axios } from 'src/lib/axios';
import { Group } from '../../types';

export const getGroup = async (groupId: string): Promise<Group> => {
  const response = await axios.get<Group>(`/groups/_id/${groupId}`);
  return response.data;
};
