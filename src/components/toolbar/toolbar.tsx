import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, StackItem, Text } from 'src/components';
import { useLogOut } from 'src/features/users';
import { useAuth } from 'src/lib/auth';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const logOutMutation = useLogOut();
  const [title, setTitle] = useState<string>();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    if (title) {
      navigate(`/search?title=${title}`);
    }
  };

  return (
    <Box className={`bg-dark-200 noselect ${styles.toolbar}`}>
      <Box className={`${styles.grid}`}>
        <Stack direction={'row'} className={`flex justify-start`} paddingRight={`.8em`}>
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
        {/* log in */}
        <Stack
          className={`pointer relative ${styles.auth}`}
          direction={'row'}
          alignItems={'center'}
          justifySelf="end"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <StackItem>
            <FaUser className={`text-gray text-base`} />
          </StackItem>
          {auth.authenticated ? (
            <StackItem>
              <Text>{auth.userName}</Text>
            </StackItem>
          ) : null}
          {/* dropdown list */}
          <Box
            className={`bg-dark-100 absolute right rounded-sm ${styles.dropDownList} ${
              showDropdown ? styles.showDropDownList : ''
            }`}
          >
            <Stack>
              {auth.authenticated ? (
                <StackItem className={`w-full`}>
                  <Text
                    className={`pointer block rounded-sm ${styles.listItem}`}
                    onClick={async () => await logOutMutation.mutateAsync(undefined)}
                  >
                    Log Out
                  </Text>
                </StackItem>
              ) : (
                <StackItem className={`w-full`}>
                  <Link to="/auth/signIn" className={`block rounded-sm ${styles.listItem}`}>
                    Sign In
                  </Link>
                </StackItem>
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
