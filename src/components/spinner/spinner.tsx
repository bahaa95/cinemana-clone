import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { SpinnerProps } from './types';

export const Spinner = (props: SpinnerProps) => {
  return <ChakraSpinner {...props} />;
};
