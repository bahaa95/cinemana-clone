import { Box, Stack, StackItem, Input } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <Box className={`bg-dark-200 ${styles.toolbar}`}>
      <Box className={`${styles.grid}`}>
        <Box>
          <Stack direction={'row'} className={`flex justify-start`}>
            <StackItem>
              <FiSearch className={`text-white text-2xl pointer`} />
            </StackItem>
            <StackItem>
              <Input variant="unstyled" placeholder="Search movies & series" />
            </StackItem>
          </Stack>
        </Box>
        {/* log in */}
        <Box justifySelf="end">
          <FaUser className={`text-gray text-base pointer`} />
        </Box>
      </Box>
    </Box>
  );
};
