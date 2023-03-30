import { Box, Stack, StackItem } from 'src/components';
import { Person } from '../Person';
import styles from './Staff.module.scss';
import { StaffProps } from './types';

export const Staff = (props: StaffProps) => {
  const { title, persons, className, ...otherProps } = props;

  return (
    <Box className={`${styles.staff} ${className || ''}`} {...otherProps}>
      <Stack direction={'column'}>
        <StackItem>
          <h3 className={`text-gray uppercase ${styles.title}`}>{title}</h3>
        </StackItem>
        <StackItem>
          <Box className={`${styles.persons}`}>
            {persons.map((person) => (
              <Person key={person._id} person={person} />
            ))}
          </Box>
        </StackItem>
      </Stack>
    </Box>
  );
};
