import { Dispatch, SetStateAction } from 'react';
import { Auth } from '../../types';

export type Props = {
  children: React.ReactNode;
};

export type AuthContext = {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
};
