import { Box } from 'src/components';
import styles from './Loader.module.scss';
import { LoaderProps } from './types';

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <Box
      className={`absolute top bottom left right flex justify-center alaign-center bg-dark-200 ${
        className || ''
      }`}
    >
      <div className={`${styles.ring}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};
