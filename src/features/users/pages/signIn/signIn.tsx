import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Form,
  Helmet,
  Main,
  Section,
  Stack,
  StackItem,
  Input,
  Image,
  Text,
} from 'src/components';
import { useAuth } from 'src/lib/auth';
import { notify } from 'src/lib/notify';
import { useSignIn } from '../../api';
import { Layout, Button } from '../../components';
import { signInSchema, SignInSchema } from '../../valdationSchema';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const signInMutation = useSignIn({
    config: {
      onSuccess(data) {
        notify({
          type: 'success',
          message: 'Sign in success',
        });

        setAuth({
          authenticated: true,
          userName: data.userName,
          accessToken: data.accessToken,
        });

        navigate('/home');
      },
    },
  });

  const handleSignIn = async (data: SignInSchema) => {
    await signInMutation.mutateAsync(data);
  };

  return (
    <Layout>
      <Helmet title="sign in" />
      <Main>
        <Section>
          <Box>
            <Form<SignInSchema, typeof signInSchema>
              schema={signInSchema}
              onSubmit={(data) => handleSignIn(data)}
            >
              {({ register, formState }) => (
                <Box className={`${styles.form}`}>
                  <Stack alignItems={'center'}>
                    <StackItem>
                      <Stack>
                        <Box className="flex justify-center">
                          <Image src="/cinemana.svg" className={`${styles.logo}`} />
                        </Box>
                        <StackItem>
                          <h2 className={`text-gray ${styles.title}`}>Cinemana-Clone</h2>
                        </StackItem>
                      </Stack>
                    </StackItem>
                    <StackItem className={`w-full`}>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        registration={register('email')}
                        error={formState.errors['email']}
                      />
                    </StackItem>
                    <StackItem className={`w-full`}>
                      <Input
                        placeholder="Password"
                        type="password"
                        registration={register('password')}
                        error={formState.errors['password']}
                      />
                    </StackItem>
                    <StackItem className={`w-full`}>
                      <Button
                        type="submit"
                        className={`w-full`}
                        isLoading={signInMutation.isLoading}
                        loadingText="sign in"
                      >
                        Sign In
                      </Button>
                    </StackItem>
                    <StackItem>
                      <Stack className="text-gray noselect" direction={'row'}>
                        <StackItem>
                          <Text>New member ?</Text>
                        </StackItem>
                        <StackItem>
                          <Link to="/auth/signUp" className="text-danger">
                            Sign Up
                          </Link>
                        </StackItem>
                      </Stack>
                    </StackItem>
                  </Stack>
                </Box>
              )}
            </Form>
          </Box>
        </Section>
      </Main>
    </Layout>
  );
};
