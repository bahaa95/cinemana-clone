import { Box } from 'src/components';
import { Person } from '../Person';
import styles from './Staff.module.scss';
import { StaffProps } from './types';

export const Staff: React.FC<StaffProps> = ({ title, persons, className, ...otherProps }) => {
  return (
    <Box className={`${styles.staff} ${className || ''}`} {...otherProps}>
      <h3 className={`text-gray uppercase ${styles.title}`}>{title}</h3>
      <Box className={`${styles.persons}`}>
        {persons.map((person) => (
          <Person key={person._id} person={person} />
        ))}
      </Box>
    </Box>
  );
};
