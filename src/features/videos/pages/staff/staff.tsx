import { useParams } from 'react-router-dom';
import { Helmet, Main, MainLayout, Section, Box, Stack, StackItem, Image } from 'src/components';
import { useGetPerson } from '../../api';
import { VideoList } from '../../components/videoList';
import styles from './Staff.module.scss';

export const Staff = () => {
  const params = useParams<{ _id: string }>();
  const { data: person, ...personQuery } = useGetPerson({ _id: params._id as string });
  console.log(person);
  if (personQuery.isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <MainLayout>
      <Helmet title={person?.name || 'no content'} />
      <Main className={`bg-dark-200 ${styles.staff}`}>
        <Section className={`${styles.section}`}>
          <Box>
            <Stack direction={'row'} align={'center'}>
              <StackItem>
                <Box className={`${styles.imageContainer}`}>
                  <Image
                    className={`${styles.image}`}
                    src={person?.image?.url}
                    alt={person?.name}
                  />
                </Box>
              </StackItem>
              <StackItem>
                <Box>
                  <h2 className={`text-white capitalize ${styles.name}`}>{person?.name}</h2>
                </Box>
              </StackItem>
            </Stack>
          </Box>
        </Section>
        <Section className={`${styles.section}`}>
          <Box>
            <VideoList videos={person?.videos || []} />
          </Box>
        </Section>
      </Main>
    </MainLayout>
  );
};
