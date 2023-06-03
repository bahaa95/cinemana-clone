import { useParams } from 'react-router-dom';
import { Helmet, Main, MainLayout, Section, Text, Loader, NoContent, Box } from 'src/components';
import { useGetGroup } from '../../api';
import { VideoList } from '../../components';
import styles from './Group.module.scss';

export const Group: React.FC = () => {
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
            <Box className={`flex flex-col`}>
              <Text className={`text-white capitalize ${styles.title}`}>
                {groupQuery.data?.title}
              </Text>
              <VideoList videos={groupQuery.data?.videos || []} />
            </Box>
          </Section>
        </Main>
      )}
    </MainLayout>
  );
};
