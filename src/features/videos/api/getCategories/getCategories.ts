import { axios } from 'src/lib/axios';
import { ICategory } from '../../types';

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get<ICategory[]>('/categories');
  return response.data;
};
