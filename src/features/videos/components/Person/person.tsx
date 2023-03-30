import { Link } from 'react-router-dom';
import { Box, Image } from 'src/components';
import styles from './Person.module.scss';
import { PersonProps } from './types';

export const Person = (props: PersonProps) => {
  const { person, className, ...otherProps } = props;
  return (
    <Box className={`flex justify-bettwen alaign-center ${className || ''}`} {...otherProps}>
      <Box className={` ${styles.imageContainer} ${styles.person}`}>
        <Image
          className={`noselect image-overlay ${styles.image}`}
          src={person?.image?.url}
          alt={person?.name}
        />
      </Box>
      <Box className={`text-white capitalize ${styles.name}`}>
        <Link to={`/staff/_id/${person._id}`}>{person?.name}</Link>
      </Box>
    </Box>
  );
};
