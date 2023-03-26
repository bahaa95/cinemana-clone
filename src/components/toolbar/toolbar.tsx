import { Box, Stack, StackItem, Grid, GridItem, Input } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <Box className={`bg-dark-200 ${styles.toolbar}`}>
      <Grid templateColumns="repeat(5, 1fr)">
        {/* Hamburger Menu */}
        <GridItem colSpan={1}>
          <Box>
            <GiHamburgerMenu className={`text-gray text-2xl pointer`} />
          </Box>
        </GridItem>
        {/* search */}
        <GridItem colSpan={3}>
          <Stack direction={'row'} className={`flex justify-start`}>
            <StackItem>
              <FiSearch className={`text-white text-2xl pointer`} />
            </StackItem>
            <StackItem>
              <Input variant="unstyled" placeholder="Search movies & series" />
            </StackItem>
          </Stack>
        </GridItem>
        {/* log in */}
        <GridItem colSpan={1} justifySelf="end">
          <FaUser className={`text-white text-xl pointer`} />
        </GridItem>
      </Grid>
    </Box>
  );
};
