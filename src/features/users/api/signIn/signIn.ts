import { axios } from 'src/lib/axios';
import { SignInSchema } from '../../valdationSchema';

interface Response {
  accessToken: string;
  userName: string;
  message?: string;
}

export const signIn = async (data: SignInSchema): Promise<Response> => {
  const response = await axios.post(`/users/signin`, data, { withCredentials: true });
  return response.data;
};
