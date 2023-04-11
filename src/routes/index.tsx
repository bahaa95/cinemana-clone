import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Loader } from 'src/components';
import { useAuth, useRefreshToken, isValidToken } from 'src/lib/auth';
import { lazyImport } from 'src/utils/lazyImport';
const { Home } = lazyImport(() => import('src/features/videos'), 'Home');
const { Video } = lazyImport(() => import('src/features/videos'), 'Video');
const { Staff } = lazyImport(() => import('src/features/videos'), 'Staff');
const { Search } = lazyImport(() => import('src/features/videos'), 'Search');
const { Favorites } = lazyImport(() => import('src/features/videos'), 'Favorites');
const { WatchList } = lazyImport(() => import('src/features/videos'), 'WatchList');
const { Group } = lazyImport(() => import('src/features/videos'), 'Group');
const { UsersRoute } = lazyImport(() => import('src/features/users'), 'UsersRoute');

export const AppRoutes = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const location = useLocation();

  const refreshTokenMutation = useRefreshToken({
    config: {
      useErrorBoundary: false,
      onSuccess: () => navigate(location.pathname),
      onError: () => navigate('/auth/signIn'),
    },
  });

  useEffect(() => {
    if (!isValidToken(auth.accessToken)) {
      refreshTokenMutation.mutate(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (refreshTokenMutation.isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/video/_id/:_id" element={<Video />} />
      <Route path="/staff/_id/:_id" element={<Staff />} />
      <Route path="/movies" element={<Search />} />
      <Route path="/series" element={<Search />} />
      <Route path="/search" element={<Search />} />
      <Route path="/groups/_id/:_id" element={<Group />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/auth/*" element={<UsersRoute />} />
    </Routes>
  );
};
