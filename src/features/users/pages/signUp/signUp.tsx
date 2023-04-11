import { useNavigate } from 'react-router-dom';
import { Box, Form, Helmet, Main, Section, Stack, StackItem, Input } from 'src/components';
import { notify } from 'src/lib/notify';
import { useSignUp } from '../../api';
import { Layout, Button, FormFoter } from '../../components';
import { signUpSchema, SignUpSchema } from '../../valdationSchema';
import styles from './SignUp.module.scss';

export const SignUp = () => {
  const navigate = useNavigate();

  const signUpMutation = useSignUp({
    config: {
      onSuccess: () => {
        notify({
          type: 'success',
          message: 'Sign up success',
        });

        navigate('/auth/signIn');
      },
      onError: (error: any) => {
        const message = (error?.response?.data?.message || error?.message) as string;
        notify({
          type: 'error',
          message: message,
        });
      },
    },
  });

  const handleSignUp = async (data: SignUpSchema) => {
    await signUpMutation.mutateAsync(data);
  };

  return (
    <Layout>
      <Helmet title="sign up" />
      <Main>
        <Section>
          <Box>
            <Form<SignUpSchema, typeof signUpSchema>
              schema={signUpSchema}
              onSubmit={(data) => handleSignUp(data)}
            >
              {({ register, formState }) => (
                <Box className={`${styles.form}`}>
                  <Stack alignItems={'center'}>
                    <StackItem className={`w-full`}>
                      <Input
                        placeholder="User name"
                        type="text"
                        registration={register('username')}
                        error={formState.errors['username']}
                      />
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
                      <Input
                        placeholder="Confirm password"
                        type="password"
                        registration={register('confirmPassword')}
                        error={formState.errors['confirmPassword']}
                      />
                    </StackItem>
                    <StackItem className={`w-full`}>
                      <Button
                        type="submit"
                        className={`w-full`}
                        isLoading={signUpMutation.isLoading}
                        loadingText="sign up"
                      >
                        Sign Up
                      </Button>
                    </StackItem>
                    <StackItem>
                      <FormFoter
                        title="Already has an account ?"
                        buttonText="Sign In"
                        link="/auth/signIn"
                      />
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
