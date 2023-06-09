import { useParams } from 'react-router-dom';
import {
  Helmet,
  Main,
  MainLayout,
  Section,
  Box,
  Stack,
  StackItem,
  Image,
  Loader,
  NoContent,
} from 'src/components';
import { useGetPerson } from '../../api';
import { VideoList } from '../../components/videoList';
import styles from './Staff.module.scss';

export const Staff: React.FC = () => {
  const params = useParams<{ _id: string }>();
  const { data: person, ...personQuery } = useGetPerson({ _id: params._id as string });

  if (personQuery.isError) {
    return (
      <MainLayout>
        <Helmet title="no content" />
        <NoContent />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet title={person?.name || 'no content'} />
      {personQuery.isLoading ? (
        <Loader />
      ) : (
        <Main className={`bg-dark-200 ${styles.staff}`}>
          <Section className={`${styles.section}`}>
            <Stack direction={'row'} align={'center'}>
              {/* person image */}
              <StackItem>
                <Box className={`${styles.imageContainer}`}>
                  <Image
                    className={`${styles.image}`}
                    src={person?.image?.url}
                    alt={person?.name}
                  />
                </Box>
              </StackItem>
              {/* person name */}
              <StackItem>
                <h2 className={`text-white capitalize ${styles.name}`}>{person?.name}</h2>
              </StackItem>
            </Stack>
          </Section>
          <Section className={`${styles.section}`}>
            {/* person videos */}
            <VideoList videos={person?.videos || []} />
          </Section>
        </Main>
      )}
    </MainLayout>
  );
};
