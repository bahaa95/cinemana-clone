import { AiFillStar } from 'react-icons/ai';
import { Box, Text } from 'src/components';
import styles from './Stars.module.scss';

type Props = {
  stars: number;
};

export const Stars = (props: Props) => {
  const { stars } = props;

  return (
    <Box className={`inline-block ${styles.stars}`}>
      <Box className={`flex alaign-center`}>
        <AiFillStar />
        <Text>{stars}</Text>
      </Box>
    </Box>
  );
};
