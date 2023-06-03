import { Stack as ChakraStack } from '@chakra-ui/react';
import { StackProps } from './types';

export const Stack: React.FC<StackProps> = ({ children, ...otherProps }) => {
  return <ChakraStack {...otherProps}>{children}</ChakraStack>;
};
