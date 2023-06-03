import { useNavigate } from 'react-router-dom';
import { Box, Button, Image, Stack, StackItem, Text } from 'src/components';
import { useAuth } from 'src/lib/auth';
import styles from './PrivateContent.module.scss';
import { PrivateContentProps } from './types';

export const PrivateContent: React.FC<PrivateContentProps> = ({ children }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  // return children when user is authenticated
  if (auth.authenticated) {
    return <>{children}</>;
  }

  return (
    <Box className={`${styles.privateContent}`}>
      <Stack direction={'column'} alignItems={'center'} spacing={'1em'}>
        {/* image */}
        <StackItem>
          <Box className={`${styles.imageContainer}`}>
            <Image src="/not-loggedin.svg" alt="not logged in" className={`${styles.image}`} />
          </Box>
        </StackItem>
        {/* text */}
        <StackItem>
          <Text className={`text-white text-center ${styles.text}`}>
            Sorry, you should login first to see this page contents
          </Text>
        </StackItem>
        {/* sign in button */}
        <StackItem>
          <Button className={`${styles.button}`} onClick={() => navigate('/auth/signIn')}>
            Sign in
          </Button>
        </StackItem>
      </Stack>
    </Box>
  );
};
