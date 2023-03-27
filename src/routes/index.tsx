import { Routes, Route } from 'react-router-dom';
import { lazyImport } from 'src/utils/lazyImport';
const { Home } = lazyImport(() => import('src/features/videos'), 'Home');

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
