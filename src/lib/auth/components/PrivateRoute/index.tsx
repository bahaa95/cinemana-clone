import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const PrivateRoute = () => {
  const { auth } = useAuth();

  return auth.authenticated ? (
    <Outlet />
  ) : (
    <>
      <h1>Log in first</h1>
    </>
  );
};
