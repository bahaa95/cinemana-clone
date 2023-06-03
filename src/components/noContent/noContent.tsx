import { Box, Text } from 'src/components';
import styles from './NoContent.module.scss';
import { NoContentProps } from './types';

export const NoContent: React.FC<NoContentProps> = ({ title, className, ...otherProps }) => {
  return (
    <Box className={`${styles.noContent} ${className || ''}`} {...otherProps}>
      <Text className={`text-white text-center ${styles.title}`}>
        {title || 'There is no content'}
      </Text>
    </Box>
  );
};
