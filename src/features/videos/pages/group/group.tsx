import { useParams } from 'react-router-dom';
import {
  Box,
  Helmet,
  Main,
  MainLayout,
  Section,
  Stack,
  StackItem,
  Text,
  Loader,
  NoContent,
} from 'src/components';
import { useGetGroup } from '../../api';
import { VideoList } from '../../components';
import styles from './Group.module.scss';

export const Group = () => {
  const params = useParams<{ _id: string }>();
  const groupQuery = useGetGroup({ groupId: params._id as string });

  if (groupQuery.isError) {
    return (
      <MainLayout>
        <Helmet title="no content" />
        <NoContent />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet title={`${groupQuery.data?.title || 'group'}`} />
      {groupQuery.isLoading ? (
        <Loader />
      ) : (
        <Main className={`${styles.group}`}>
          <Section>
            <Box>
              <Stack>
                <StackItem>
                  <Text className={`text-white capitalize ${styles.title}`}>
                    {groupQuery.data?.title}
                  </Text>
                </StackItem>
                <StackItem>
                  <VideoList videos={groupQuery.data?.videos || []} />
                </StackItem>
              </Stack>
            </Box>
          </Section>
        </Main>
      )}
    </MainLayout>
  );
};
