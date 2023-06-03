import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = (props) => {
  return <ChakraSpinner {...props} />;
};
