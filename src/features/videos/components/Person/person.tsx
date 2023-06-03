import { Link } from 'react-router-dom';
import { Box, Image } from 'src/components';
import styles from './Person.module.scss';
import { PersonProps } from './types';

export const Person: React.FC<PersonProps> = ({ person, className, ...otherProps }) => {
  return (
    <Box className={`flex justify-bettwen alaign-center ${className || ''}`} {...otherProps}>
      <Box className={` ${styles.imageContainer} ${styles.person}`}>
        <Image
          className={`noselect image-overlay ${styles.image}`}
          src={person?.image?.url}
          alt={person?.name}
        />
      </Box>
      <Link
        to={`/staff/_id/${person._id}`}
        className={`block text-white capitalize ${styles.name}`}
      >
        {person?.name}
      </Link>
    </Box>
  );
};
