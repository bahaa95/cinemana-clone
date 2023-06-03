import { FaHeart } from 'react-icons/fa';
import { Box, Text } from 'src/components';
import styles from './AddToFavorite.module.scss';
import { FavoriteButtonProps } from './types';

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  className,
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={`text-white ${styles.button} ${className || ''}`}>
      <Box className={`flex alaign-center`}>
        <FaHeart
          className={`${isFavorite ? styles.favorite : ''}`}
          style={{ marginRight: '.25em' }}
        />
        <Text>Favorites</Text>
      </Box>
    </button>
  );
};
