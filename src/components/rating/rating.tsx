import { Rating as ReactRating } from 'react-simple-star-rating';
import styles from './Rating.module.scss';
import { RatingProps } from './types';

export const Rating: React.FC<RatingProps> = (props) => {
  return (
    <ReactRating
      className={`flex ${styles.rating}`}
      emptyColor={'#b5b9bc'}
      fillColor={'#fff'}
      iconsCount={10}
      size={25}
      {...props}
    />
  );
};
