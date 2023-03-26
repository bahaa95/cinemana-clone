import { Stack as ChakraStack } from '@chakra-ui/react';
import { StackProps } from './types';

export const Stack = (props: StackProps) => {
  const { children, ...otherProps } = props;

  return <ChakraStack {...otherProps}>{children}</ChakraStack>;
};
