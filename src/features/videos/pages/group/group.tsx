import { useParams } from 'react-router-dom';
import { Box, Helmet, Main, MainLayout, Section, Stack, StackItem, Text } from 'src/components';
import { useGetGroup } from '../../api';
import { VideoList } from '../../components';
import styles from './Group.module.scss';

export const Group = () => {
  const params = useParams<{ _id: string }>();
  const groupQuery = useGetGroup({ groupId: params._id as string });

  if (groupQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout>
      <Helmet title={`${groupQuery.data?.title || 'group'}`} />
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
    </MainLayout>
  );
};
