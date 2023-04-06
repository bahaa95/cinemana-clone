import { Routes, Route } from 'react-router-dom';
import { lazyImport } from 'src/utils/lazyImport';
const { Home } = lazyImport(() => import('src/features/videos'), 'Home');
const { Video } = lazyImport(() => import('src/features/videos'), 'Video');
const { Staff } = lazyImport(() => import('src/features/videos'), 'Staff');
const { Search } = lazyImport(() => import('src/features/videos'), 'Search');
const { UsersRoute } = lazyImport(() => import('src/features/users'), 'UsersRoute');

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/video/_id/:_id" element={<Video />} />
      <Route path="/staff/_id/:_id" element={<Staff />} />
      <Route path="/movies" element={<Search />} />
      <Route path="/series" element={<Search />} />
      <Route path="/search" element={<Search />} />
      <Route path="/auth/*" element={<UsersRoute />} />
    </Routes>
  );
};
