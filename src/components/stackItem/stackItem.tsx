import { StackItem as ChakraStackItem } from '@chakra-ui/react';
import { StackItemProps } from './types';

export const StackItem: React.FC<StackItemProps> = ({ children, ...otherProps }) => {
  return <ChakraStackItem {...otherProps}>{children}</ChakraStackItem>;
};
