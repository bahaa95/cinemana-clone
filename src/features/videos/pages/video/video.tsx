import { BsYoutube } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
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
} from 'src/components';
import { notify } from 'src/lib/notify';
import { getScreenWidth } from 'src/utils';
import { useGetVideo } from '../../api';
import { IMDB } from '../../components';
import { Seasons } from '../../components/seasons';
import { SectionTitle } from '../../components/sectionTitle';
import { Staff } from '../../components/staff';
import { StaffNameList } from '../../components/staffNameList';
import { Videos } from '../../components/videos';
import { Watch } from '../../components/watch';
import { getYear } from '../../utils';
import styles from './Video.module.scss';

export const Video = () => {
  const { _id } = useParams<{ _id: string }>();
  const { data, ...videoQuery } = useGetVideo({ videoId: _id as string });

  if (videoQuery.isLoading) {
    return <h1>Loding...</h1>;
  }

  return (
    <MainLayout>
      <Main className={`bg-dark-200 ${styles.video}`}>
        <Helmet title={data?.video?.title as string} />
        {/* video info */}
        <Section className={`rounded-md ${styles.info}`}>
          <Box className={`${styles.infoContainer}`}>
            {/* image */}
            <Box
              className={`relative overflow-hidden rounded-lg flex justify-center alaign-center ${styles.videoImageContainer}`}
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
            <Box className={`${styles.detailes}`}>
              <Stack direction={'column'} spacing={'0em'}>
                {/* title */}
                <StackItem>
                  <Box>
                    <h2 className={`text-white ${styles.title}`}>{data?.video?.title}</h2>
                  </Box>
                </StackItem>
                {/* IMDB */}
                <StackItem>
                  <IMDB stars={data?.video?.stars || 0} />
                </StackItem>
                {/* year and categories */}
                <StackItem>
                  <Box className={`flex justify-start alaign-center`}>
                    {/* year */}
                    <Box className={`text-gray ${styles.year}`}>
                      <Text>{getYear(data?.video?.releaseDate as Date)}</Text>
                    </Box>
                    {/* categories */}
                    <Box className={`${styles.categories}`}>
                      <Stack direction={'row'} className={`text-gray`}>
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
                  </Box>
                </StackItem>
                {/* actions */}
                <StackItem>
                  <Box className={`${styles.actions}`}>
                    <Stack direction={'row'} spacing={'1em'}>
                      <StackItem>
                        <OuterLink
                          href={data?.video?.triler}
                          className={`text-white flex alaign-center ${styles.actionButton}`}
                        >
                          <BsYoutube />
                          <Text>Triler</Text>
                        </OuterLink>
                      </StackItem>
                      <StackItem>
                        <OuterLink
                          href={data?.video?.triler}
                          className={`text-white flex alaign-center ${styles.actionButton}`}
                        >
                          <FaHeart />
                          <Text>Favorites</Text>
                        </OuterLink>
                      </StackItem>
                    </Stack>
                  </Box>
                </StackItem>
                {/* description */}
                <StackItem>
                  <Box>
                    <Text className={`text-white ${styles.description}`}>
                      {data?.video?.description}
                    </Text>
                  </Box>
                </StackItem>
                {/* staff */}
                <StackItem>
                  <Stack direction={'column'} spacing={'0em'}>
                    {/* directors */}
                    <StackItem>
                      <StaffNameList title="directors" staff={data?.video?.directors || []} />
                    </StackItem>
                    {/* writers */}
                    <StackItem>
                      <StaffNameList title="writers" staff={data?.video?.writers || []} />
                    </StackItem>
                    {/* actors */}
                    <StackItem>
                      <StaffNameList title="actors" staff={data?.video?.actors || []} />
                    </StackItem>
                  </Stack>
                </StackItem>
              </Stack>
            </Box>
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
                <Box>
                  <SectionTitle>Cast & Crew</SectionTitle>
                </Box>
              </StackItem>
              {/* actors */}
              <StackItem>
                <Box>
                  <Staff title="actors" persons={data?.video?.actors || []} />
                </Box>
              </StackItem>
              {/* writers */}
              <StackItem>
                <Box>
                  <Staff title="writers" persons={data?.video?.writers || []} />
                </Box>
              </StackItem>
              {/* directors */}
              <StackItem>
                <Box>
                  <Staff title="directors" persons={data?.video?.directors || []} />
                </Box>
              </StackItem>
            </Stack>
          </Box>
        </Section>
        {/* recomodation */}
        {data?.similarVideos && data?.similarVideos?.length > 0 ? (
          <Section className={`${styles.section}`}>
            <Box>
              <Stack direction={'column'}>
                <StackItem>
                  <Box>
                    <SectionTitle>You may also like</SectionTitle>
                  </Box>
                </StackItem>
                <StackItem>
                  <Box>
                    <Videos videos={data?.similarVideos || []} />
                  </Box>
                </StackItem>
              </Stack>
            </Box>
          </Section>
        ) : null}
      </Main>
    </MainLayout>
  );
};
