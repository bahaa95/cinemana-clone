import { Routes, Route } from 'react-router-dom';
import { lazyImport } from 'src/utils/lazyImport';
const { Home } = lazyImport(() => import('src/features/videos'), 'Home');
const { Video } = lazyImport(() => import('src/features/videos'), 'Video');

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/_id/:_id" element={<Video />} />
    </Routes>
  );
};
