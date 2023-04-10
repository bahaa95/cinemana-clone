import { MainLayout, Main, Section, Helmet, Loader } from 'src/components';
import { useGetSpecialVideos, useGetGroups } from '../../api';
import { Group } from '../../components/group';
import { SpecialVideos } from '../../components/specialVideos';
import styles from './Home.module.scss';

export const Home = () => {
  const specialVideosQuery = useGetSpecialVideos();
  const groupsQuery = useGetGroups();

  return (
    <MainLayout>
      <Helmet title="home" />
      {specialVideosQuery.isLoading ? (
        <Loader />
      ) : (
        <Main className={`bg-dark-200`}>
          <Section>
            <SpecialVideos specialVideos={specialVideosQuery.data || []} />
          </Section>
          <Section className={`${styles.groups}`}>
            {groupsQuery.data?.map((group) => (
              <Group key={group._id} group={group} />
            ))}
          </Section>
        </Main>
      )}
    </MainLayout>
  );
};
