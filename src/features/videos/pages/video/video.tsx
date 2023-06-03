import { useEffect } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import {
  MainLayout,
  Main,
  Helmet,
  Section,
  Box,
  Image,
  Stack,
  StackItem,
  Text,
  OuterLink,
  Loader,
  NoContent,
} from 'src/components';
import { useAuth, usePrivateAction } from 'src/lib/auth';
import { notify } from 'src/lib/notify';
import { getScreenWidth } from 'src/utils';
import { useGetVideo, useGetHistory, useEditFavorite, useEditWatchList } from '../../api';
import {
  IMDB,
  Seasons,
  SectionTitle,
  Staff,
  StaffNameList,
  Watch,
  AddToWatchList,
  FavoriteButton,
  Recomodation,
} from '../../components';
import { getYear } from '../../utils';
import styles from './Video.module.scss';

export const Video: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const { auth } = useAuth();
  const privateAction = usePrivateAction();

  // get video info query
  const { data, ...videoQuery } = useGetVideo({ videoId: _id as string });

  // get history for video
  const historyQuery = useGetHistory({
    videoId: _id as string,
    config: { enabled: false },
  });

  // edit favorite (add and remove video from favorites)
  const favoriteMutation = useEditFavorite({ videoId: _id as string });

  // edit watchList (add and remove video from watchList)
  const watchListMutation = useEditWatchList({ videoId: _id as string });

  const handleEditFavorite = async () => {
    await favoriteMutation.mutateAsync({
      videoId: _id as string,
      favorite: !historyQuery.data?.favorite,
    });
  };

  const handleEditWatchList = async () => {
    await watchListMutation.mutateAsync({
      videoId: _id as string,
      watchList: !historyQuery.data?.watchList,
    });
  };

  useEffect(() => {
    // get history query if user is logged in
    if (auth.authenticated) {
      historyQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (videoQuery.isError) {
    return (
      <MainLayout>
        <Helmet title="not found" />
        <NoContent />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet title={data?.video?.title as string} />
      {videoQuery.isLoading ? (
        <Loader />
      ) : (
        <Main className={`bg-dark-200 ${styles.video}`}>
          {/* video info */}
          <Section className={`rounded-md ${styles.info}`}>
            <Box className={`${styles.infoContainer}`}>
              {/* image */}
              <Box
                className={`relative noselect overflow-hidden rounded-lg flex justify-center alaign-center ${styles.videoImageContainer}`}
              >
                <Image
                  src={getScreenWidth() <= 575 ? data?.video?.cover?.url : data?.video?.poster?.url}
                  alt={data?.video?.title}
                  className={`absolute top bottom right left z-index-20 ${styles.videoImage}`}
                />
                {/* show watch button if video type is movie */}
                {data?.video?.type === 'movie' ? (
                  <Watch
                    className={`relative z-index-40`}
                    onClick={() =>
                      notify({
                        type: 'info',
                        message: "Sorry it's just a clone you can't watch anything here :)",
                      })
                    }
                  />
                ) : null}
              </Box>
              {/* info */}
              <Stack direction={'column'} spacing={'0em'} className={`${styles.detailes}`}>
                {/* title */}
                <StackItem>
                  <h2 className={`text-white ${styles.title}`}>{data?.video?.title}</h2>
                </StackItem>
                {/* IMDB */}
                <StackItem>
                  <IMDB stars={data?.video?.stars || 0} />
                </StackItem>
                {/* year and categories */}
                <StackItem>
                  <Box className={`flex justify-start alaign-center`}>
                    {/* year */}
                    <Text className={`text-gray ${styles.year}`}>
                      {getYear(data?.video?.releaseDate as Date)}
                    </Text>
                    {/* categories */}
                    <Stack
                      direction={'row'}
                      spacing={'0.3em'}
                      className={`text-gray ${styles.categories}`}
                    >
                      {data?.video?.categories.map((category) => (
                        <StackItem key={category._id} className={`capitalize ${styles.category}`}>
                          <Link
                            to={`/search?type=${data?.video?.type}&category=${category._id}`}
                            className={`pointer`}
                          >
                            {category.title}
                          </Link>
                        </StackItem>
                      ))}
                    </Stack>
                  </Box>
                </StackItem>
                {/* actions */}
                <StackItem>
                  <Stack direction={'row'} spacing={'1em'} className={`${styles.actions}`}>
                    {/* triler */}
                    <StackItem>
                      <OuterLink
                        href={data?.video?.triler}
                        className={`text-white flex alaign-center ${styles.actionButton}`}
                      >
                        <BsYoutube />
                        <Text>Triler</Text>
                      </OuterLink>
                    </StackItem>
                    {/* Favorites */}
                    <StackItem>
                      <FavoriteButton
                        isFavorite={historyQuery.data?.favorite}
                        onClick={() => privateAction(handleEditFavorite)}
                      />
                    </StackItem>
                    {/* watch list */}
                    <StackItem>
                      <AddToWatchList onClick={() => privateAction(handleEditWatchList)} />
                    </StackItem>
                  </Stack>
                </StackItem>
                {/* description */}
                <StackItem>
                  <Text className={`text-white ${styles.description}`}>
                    {data?.video?.description}
                  </Text>
                </StackItem>
                {/* staff */}
                <StackItem>
                  <Box className={`flex flex-col`}>
                    <StaffNameList title="directors" staff={data?.video?.directors || []} />
                    <StaffNameList title="writers" staff={data?.video?.writers || []} />
                    <StaffNameList title="actors" staff={data?.video?.actors || []} />
                  </Box>
                </StackItem>
              </Stack>
            </Box>
          </Section>
          {/* seasons and episodes */}
          {data?.video?.type === 'series' ? (
            <Section className={`${styles.section}`}>
              <Seasons seasons={data?.video?.seasons || []} />
            </Section>
          ) : null}
          {/* staff */}
          <Section className={`${styles.section}`}>
            <Box>
              <Stack direction={'column'}>
                <StackItem>
                  <SectionTitle>Cast & Crew</SectionTitle>
                </StackItem>
                {/* actors */}
                <StackItem>
                  <Staff title="actors" persons={data?.video?.actors || []} />
                </StackItem>
                {/* writers */}
                <StackItem>
                  <Staff title="writers" persons={data?.video?.writers || []} />
                </StackItem>
                {/* directors */}
                <StackItem>
                  <Staff title="directors" persons={data?.video?.directors || []} />
                </StackItem>
              </Stack>
            </Box>
          </Section>
          {/* recomodation */}
          {data?.similarVideos && data?.similarVideos?.length > 0 ? (
            <Section className={`${styles.section}`}>
              <Recomodation videos={data?.similarVideos || []} />
            </Section>
          ) : null}
        </Main>
      )}
    </MainLayout>
  );
};
