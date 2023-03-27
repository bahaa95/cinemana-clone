import { BsFillPlayFill } from 'react-icons/bs';
import { Box, Button, Text } from 'src/components';
import { WatchProps } from './types';
import styles from './Watch.module.scss';

export const Watch = (props: WatchProps) => {
  const { className, ...otherProps } = props;

  return (
    <Button className={`${styles.watch} ${className || ''}`} {...otherProps}>
      <Box className={`text-white flex alaign-center`}>
        <BsFillPlayFill className={`${styles.icon}`} />
        <Text className={`${styles.title}`}>Watch</Text>
      </Box>
    </Button>
  );
};
