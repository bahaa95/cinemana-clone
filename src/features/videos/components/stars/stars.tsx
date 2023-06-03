import { AiFillStar } from 'react-icons/ai';
import { Box, Text } from 'src/components';
import styles from './Stars.module.scss';
import { StarsProps } from './types';

export const Stars: React.FC<StarsProps> = ({ stars = 0, className, ...props }) => {
  return (
    <Box className={`flex alaign-center text-white ${styles.stars} ${className || ''}`} {...props}>
      <AiFillStar />
      <Text>{stars}</Text>
    </Box>
  );
};
