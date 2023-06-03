import { Box, Text } from 'src/components';
import styles from './NewRelease.module.scss';
import { NewReleaseProps } from './types';

export const NewRelease: React.FC<NewReleaseProps> = ({ className, ...props }) => {
  return (
    <Box
      className={`relative capitalize text-gray ${styles.release} ${className || ''}`}
      {...props}
    >
      <Text>new releases</Text>
    </Box>
  );
};
