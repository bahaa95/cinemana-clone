import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  MainLayout,
  Helmet,
  Main,
  Section,
  Box,
  Stack,
  StackItem,
  Wrap,
  WrapItem,
  Select,
  Rating,
  Loader,
  NoContent,
} from 'src/components';
import { useSearch, useGetCategories } from '../../api';
import { TypeSwitch } from '../../components/typeSwitch';
import { VideoList } from '../../components/videoList';
import { serializeFormQuery } from '../../utils';
import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [title, setTitle] = useState(searchParams.get('title'));
  const [type, setType] = useState(searchParams.get('type') || 'movie');
  const [category, setCategory] = useState(searchParams.get('category'));
  const [stars, setStars] = useState(searchParams.get('stars'));

  // it work when href is change
  useEffect(() => {
    setTitle(searchParams.get('title'));
    setType(searchParams.get('type') || 'movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);

  // it work when page is change ex(change from movies to series)
  useEffect(() => {
    setStars(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    setSearchParams(serializeFormQuery({ title, type, category, stars }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, category, stars]);

  const searchQuery = useSearch({
    query: serializeFormQuery({ title, type, category, stars }),
  });
  const categoriesQuery = useGetCategories();

  return (
    <MainLayout>
      <Helmet title={location.pathname.split('/')[1]} />
      {searchQuery.isLoading ? (
        <Loader />
      ) : (
        <Main className={`min-h-screen bg-dark-200 ${styles.search}`}>
          <Section>
            <Stack>
              {/* filters */}
              <StackItem>
                <Box className={`noselect ${styles.filters}`}>
                  <Wrap spacing={'1.5em'}>
                    {/* type switch */}
                    <WrapItem>
                      <TypeSwitch
                        defaultType={type as 'movie' | 'series'}
                        onChange={(type) => setType(type as string)}
                      />
                    </WrapItem>
                    {/* categories */}
                    <WrapItem>
                      <Select
                        placeholder="All"
                        value={category || undefined}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {categoriesQuery?.data?.map((category) => (
                          <option key={category._id} value={category._id} className={`capitalize`}>
                            {category.title}
                          </option>
                        ))}
                      </Select>
                    </WrapItem>
                    {/* stars */}
                    <WrapItem>
                      <Box className={`bg-dark-100 ${styles.stars}`}>
                        <Rating
                          onClick={(value) => setStars(value.toString())}
                          initialValue={stars ? Number(stars) : 0}
                        />
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Box>
              </StackItem>
              {/* video list */}
              <StackItem>
                {searchQuery.data && searchQuery.data.length > 0 ? (
                  <VideoList videos={searchQuery.data} />
                ) : (
                  <NoContent title="There is no content found related to search." />
                )}
              </StackItem>
            </Stack>
          </Section>
        </Main>
      )}
    </MainLayout>
  );
};
