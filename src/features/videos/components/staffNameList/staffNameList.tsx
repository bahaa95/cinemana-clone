import { Link } from 'react-router-dom';
import { Box, Text, Wrap, WrapItem } from 'src/components';
import styles from './StaffNameList.module.scss';
import { StaffNameListProps } from './type';

export const StaffNameList: React.FC<StaffNameListProps> = ({ title, staff, ...props }) => {
  return (
    <Box className={`flex`} {...props}>
      <Text className={`block text-gray capitalize ${styles.title}`}>{title}</Text>
      <Wrap alignContent={'flex-start'} spacing={'0em'} className={`w-full`}>
        {staff.map((person) => (
          <WrapItem key={person._id} className={`capitalize ${styles.name}`}>
            <Link to={`/staff/_id/${person._id}`} className={`${styles.link}`}>
              {person.name}
            </Link>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
