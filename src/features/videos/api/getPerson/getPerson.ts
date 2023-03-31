import { axios } from 'src/lib/axios';
import { Person } from './types';

export const getPerson = async (_id: string): Promise<Person> => {
  const response = await axios.get<Person>(`/staff/person/${_id}`);
  return response.data;
};
