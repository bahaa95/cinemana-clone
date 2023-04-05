import { axios } from 'src/lib/axios';
import { Category } from '../../types';

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>('/categories');
  return response.data;
};
