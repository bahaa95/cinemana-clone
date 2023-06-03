import { Box } from 'src/components';
import styles from './IMDB.module.scss';
import { IMDBProps } from './types';

export const IMDB: React.FC<IMDBProps> = ({ stars, className, ...props }) => {
  return (
    <Box className={`flex alaign-center ${styles.IMDB} ${className || ''}`} {...props}>
      <span className={`block ${styles.title}`}>IMDB</span>
      <span className={`text-white ${styles.stars}`}>{stars}</span>
    </Box>
  );
};
