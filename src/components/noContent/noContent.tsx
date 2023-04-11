import { Box, Text } from 'src/components';
import styles from './NoContent.module.scss';
import { NoContentProps } from './types';

export const NoContent = (props: NoContentProps) => {
  const { title, className, ...otherProps } = props;

  return (
    <Box className={`${styles.noContent} ${className || ''}`} {...otherProps}>
      <Box>
        <Text className={`text-white text-center ${styles.title}`}>
          {title || 'There is no content'}
        </Text>
      </Box>
    </Box>
  );
};
