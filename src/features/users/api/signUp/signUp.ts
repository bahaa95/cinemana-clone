import { axios } from 'src/lib/axios';
import { SignUpSchema } from '../../valdationSchema';

interface Response {
  message?: string;
}

export const signUp = async (data: SignUpSchema): Promise<Response> => {
  const response = await axios.post<Response>(`/users/signup`, data);
  return response.data;
};
