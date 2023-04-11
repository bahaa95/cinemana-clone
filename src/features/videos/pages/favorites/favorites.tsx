import { useEffect } from 'react';
import {
  Box,
  Helmet,
  Main,
  MainLayout,
  Section,
  PrivateContent,
  Loader,
  NoContent,
} from 'src/components';
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

  return (
    <MainLayout>
      <Helmet title="favorites" />
      {favoritesQuery.isLoading ? (
        <Loader />
      ) : (
        <PrivateContent>
          <Main className={`relative bg-dark-200 min-h-full ${styles.favorites}`}>
            <Section>
              <Box>
                {favoritesQuery.data && favoritesQuery.data.length > 0 ? (
                  <VideoList videos={favoritesQuery.data || []} />
                ) : (
                  <NoContent title="Your favorite list is empty." />
                )}
              </Box>
            </Section>
          </Main>
        </PrivateContent>
      )}
    </MainLayout>
  );
};
