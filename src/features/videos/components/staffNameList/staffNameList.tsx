import { Link } from 'react-router-dom';
import { Box, Stack, StackItem, Text, Wrap, WrapItem } from 'src/components';
import styles from './StaffNameList.module.scss';
import { StaffNameListProps } from './type';

export const StaffNameList = (props: StaffNameListProps) => {
  const { title, staff } = props;

  return (
    <Box>
      <Stack direction={'row'}>
        <StackItem>
          <Text className={`text-gray capitalize ${styles.title}`}>{title} : </Text>
        </StackItem>
        <Box className={`w-full`}>
          <Wrap alignContent={'flex-start'} spacing={'0em'}>
            {staff.map((person) => (
              <WrapItem key={person._id} className={`capitalize ${styles.name}`}>
                <Link to={`/staff/_id/${person._id}`} className={`${styles.link}`}>
                  {person.name}
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </Box>
  );
};
