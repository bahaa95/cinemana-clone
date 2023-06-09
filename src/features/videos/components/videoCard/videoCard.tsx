import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, StackItem, Text, BackgroundImage } from 'src/components';
import { getYear } from '../../utils';
import { IMDB } from '../IMDB';
import { Watch } from '../watch';
import { VideoCardProps } from './types';
import styles from './VideoCard.module.scss';

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const navigate = useNavigate();

  const handleWatchClick = () => navigate(`/video/_id/${video._id}`);

  return (
    <Box className={`noselect ${styles.videoCard}`}>
      <Stack>
        {/* image */}
        <StackItem className={`relative rounded-lg overflow-hidden`}>
          <Box className={`absolute top bottom right left z-index-20 ${styles.hover}`}>
            <Watch className={`absolute ${styles.watchBtn}`} onClick={handleWatchClick} />
          </Box>
          <Box
            className={`relative rounded-lg overflow-hidden z-index-10 ${styles.imageContainer}`}
          >
            <BackgroundImage
              src={video?.poster?.url}
              alt={video.title}
              className={`${styles.imageContainer}`}
            />
          </Box>
        </StackItem>
        {/* info */}
        <StackItem>
          <Box className={`${styles.titleAndStars}`}>
            <IMDB stars={video?.stars} />
            <Link to={`/video/_id/${video._id}`} className={`text-white block ${styles.title}`}>
              <Text>{video?.title}</Text>
            </Link>
          </Box>
          <Box className={`text-gray flex justify-start alaign-center ${styles.categoryAndYear}`}>
            <Text className={`capitalize ${styles.category}`}>{video?.mainCategory?.title}</Text>,
            <Text className={`capitalize ${styles.year}`}>{getYear(video?.releaseDate)}</Text>
          </Box>
        </StackItem>
      </Stack>
    </Box>
  );
};
