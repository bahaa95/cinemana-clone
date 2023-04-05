import { Box, Wrap } from 'src/components';
import { VideoCard } from '../videoCard';
import { VideoListProps } from './types';
import styles from './VideoList.module.scss';

export const VideoList = (props: VideoListProps) => {
  const { videos, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Wrap spacing={'1em'} className={`${styles.videoList}`}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </Wrap>
    </Box>
  );
};
