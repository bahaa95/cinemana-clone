import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, StackItem } from 'src/components';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();

  const handleSearch = () => {
    if (title) {
      navigate(`/search?title=${title}`);
    }
  };

  return (
    <Box className={`bg-dark-200 noselect ${styles.toolbar}`}>
      <Box className={`${styles.grid}`}>
        <Box>
          <Stack direction={'row'} className={`flex justify-start`}>
            <StackItem>
              <FiSearch className={`text-white text-2xl pointer`} onClick={handleSearch} />
            </StackItem>
            <StackItem className={`w-full`}>
              <Input
                variant="unstyled"
                placeholder="Search movies & series"
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
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
