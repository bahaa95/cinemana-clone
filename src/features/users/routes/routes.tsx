import { Route, Routes } from 'react-router-dom';
import { lazyImport } from 'src/utils/lazyImport';
const { SignIn } = lazyImport(() => import('../pages'), 'SignIn');
const { SignUp } = lazyImport(() => import('../pages'), 'SignUp');

export const UsersRoute = () => {
  return (
    <Routes>
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  );
};
