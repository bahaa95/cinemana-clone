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
} from 'src/components';
import { useSearch, useGetCategories } from '../../api';
import { TypeSwitch } from '../../components/typeSwitch';
import { VideoList } from '../../components/videoList';
import { serializeFormQuery } from '../../utils';
import styles from './Search.module.scss';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [title, setTitle] = useState(searchParams.get('title'));
  const [type, setType] = useState(searchParams.get('type') || 'movie');
  const [category, setCategory] = useState(searchParams.get('category'));
  const [stars, setStars] = useState(searchParams.get('stars'));

  // it work when page is change ex(change from movies to series)
  useEffect(() => {
    setTitle(searchParams.get('title'));
    setType(searchParams.get('type') || 'movie');
    setStars(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);

  useEffect(() => {
    setSearchParams(serializeFormQuery({ title, type, category, stars }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, category, stars]);

  const searchQuery = useSearch({
    query: serializeFormQuery({ title, type, category, stars }),
  });
  const categoriesQuery = useGetCategories();

  if (searchQuery.isLoading || categoriesQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout>
      <Helmet title={location.pathname.split('/')[1]} />
      <Main className={`min-h-screen bg-dark-200 ${styles.search}`}>
        <Section>
          <Box>
            <Stack>
              {/* filters */}
              <StackItem>
                <Box className={`noselect ${styles.filters}`}>
                  <Wrap spacing={'1.5em'}>
                    {/* type switch */}
                    <WrapItem>
                      <TypeSwitch
                        defaultType={type as 'movie' | 'series'}
                        onChange={(type) => setType(type)}
                      />
                    </WrapItem>
                    {/* categories */}
                    <WrapItem>
                      <Box>
                        <Select
                          placeholder="All"
                          value={category || undefined}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          {categoriesQuery?.data?.map((category) => (
                            <option
                              key={category._id}
                              value={category._id}
                              className={`capitalize`}
                            >
                              {category.title}
                            </option>
                          ))}
                        </Select>
                      </Box>
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
                <Box>
                  <VideoList videos={searchQuery.data || []} />
                </Box>
              </StackItem>
            </Stack>
          </Box>
        </Section>
      </Main>
    </MainLayout>
  );
};
