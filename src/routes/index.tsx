import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRefreshToken } from 'src/lib/auth';
import { lazyImport } from 'src/utils/lazyImport';
const { Home } = lazyImport(() => import('src/features/videos'), 'Home');
const { Video } = lazyImport(() => import('src/features/videos'), 'Video');
const { Staff } = lazyImport(() => import('src/features/videos'), 'Staff');
const { Search } = lazyImport(() => import('src/features/videos'), 'Search');
const { UsersRoute } = lazyImport(() => import('src/features/users'), 'UsersRoute');
const { Favorites } = lazyImport(() => import('src/features/videos'), 'Favorites');
const { WatchList } = lazyImport(() => import('src/features/videos'), 'WatchList');

export const AppRoutes = () => {
  const navigate = useNavigate();

  const refreshTokenMutation = useRefreshToken({
    config: {
      useErrorBoundary: false,
      onSuccess: () => navigate('/home'),
      onError: () => navigate('/auth/signIn'),
    },
  });

  useEffect(() => {
    refreshTokenMutation.mutate(undefined);
  }, []);

  if (refreshTokenMutation.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/video/_id/:_id" element={<Video />} />
      <Route path="/staff/_id/:_id" element={<Staff />} />
      <Route path="/movies" element={<Search />} />
      <Route path="/series" element={<Search />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/auth/*" element={<UsersRoute />} />
    </Routes>
  );
};
