import { useEffect } from 'react';
import { Box, Helmet, Main, MainLayout, Section, PrivateContent } from 'src/components';
import { useAuth } from 'src/lib/auth';
import { useGetFavorites } from '../../api';
import { VideoList } from '../../components';
import styles from './Favorites.module.scss';

export const Favorites = () => {
  const { auth } = useAuth();

  const favoritesQuery = useGetFavorites({
    config: {
      enabled: false,
    },
  });

  // fetch favorites if user is authenticated
  useEffect(() => {
    if (auth.authenticated) {
      favoritesQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (favoritesQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout>
      <Helmet title="favorites" />
      <PrivateContent>
        <Main className={`relative bg-dark-200 min-h-full ${styles.favorites}`}>
          <Section>
            <Box>
              <VideoList videos={favoritesQuery.data || []} />
            </Box>
          </Section>
        </Main>
      </PrivateContent>
    </MainLayout>
  );
};
