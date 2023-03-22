import { createContext, useState } from 'react';
import { Auth } from '../../types';
import { AuthContext as TAuthContext, Props } from './types';

const defaultAuthValues: Auth = {
  authenticated: false,
  username: '',
  email: '',
  accessToken: '',
};

export const AuthContext = createContext<TAuthContext>({
  auth: defaultAuthValues,
  setAuth: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth>(defaultAuthValues);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
