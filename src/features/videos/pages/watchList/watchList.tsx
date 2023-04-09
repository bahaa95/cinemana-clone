import { useEffect } from 'react';
import { Box, Helmet, Main, MainLayout, Section, PrivateContent } from 'src/components';
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

  if (watchListQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout>
      <Helmet title="watchlist" />
      <PrivateContent>
        <Main className={`relative bg-dark-200 min-h-full ${styles.watchList}`}>
          <Section>
            <Box>
              <VideoList videos={watchListQuery.data || []} />
            </Box>
          </Section>
        </Main>
      </PrivateContent>
    </MainLayout>
  );
};
