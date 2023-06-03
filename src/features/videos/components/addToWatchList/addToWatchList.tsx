import { AiOutlinePlus } from 'react-icons/ai';
import { Box, Text } from 'src/components';
import styles from './AddToWatchList.module.scss';
import { AddToWatchListProps } from './type';

export const AddToWatchList: React.FC<AddToWatchListProps> = ({ className, ...otherProps }) => {
  return (
    <button className={`text-white ${styles.button} ${className || ''}`} {...otherProps}>
      <Box className={`flex flex-row alaign-center`}>
        <AiOutlinePlus style={{ marginRight: '.15em' }} />
        <Text>Add to Watch List</Text>
      </Box>
    </button>
  );
};
