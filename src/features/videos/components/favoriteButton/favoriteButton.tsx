import { FaHeart } from 'react-icons/fa';
import { Stack, StackItem, Text } from 'src/components';
import styles from './AddToFavorite.module.scss';
import { FavoriteButtonProps } from './types';

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite, className, ...otherProps } = props;

  return (
    <button {...otherProps} className={`text-white ${styles.button} ${className || ''}`}>
      <Stack direction={'row'} alignItems={'center'} spacing={'.2em'}>
        <StackItem>
          <FaHeart className={`${isFavorite ? styles.favorite : ''}`} />
        </StackItem>
        <StackItem>
          <Text>Favorites</Text>
        </StackItem>
      </Stack>
    </button>
  );
};
