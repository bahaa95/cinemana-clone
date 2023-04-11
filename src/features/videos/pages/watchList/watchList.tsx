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
import { useGetWatchList } from '../../api';
import { VideoList } from '../../components';
import styles from './WatchList.module.scss';

export const WatchList = () => {
  const { auth } = useAuth();

  const watchListQuery = useGetWatchList({
    config: {
      enabled: false,
    },
  });

  // fetch watchList if user is authenticated
  useEffect(() => {
    if (auth.authenticated) {
      watchListQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <Helmet title="watchlist" />
      {watchListQuery.isLoading ? (
        <Loader />
      ) : (
        <PrivateContent>
          <Main className={`relative bg-dark-200 min-h-full ${styles.watchList}`}>
            <Section>
              <Box>
                {watchListQuery.data && watchListQuery.data?.length > 0 ? (
                  <VideoList videos={watchListQuery.data} />
                ) : (
                  <NoContent title="Your watchlist is empty." />
                )}
              </Box>
            </Section>
          </Main>
        </PrivateContent>
      )}
    </MainLayout>
  );
};
