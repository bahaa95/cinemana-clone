import { StackItem as ChakraStackItem } from '@chakra-ui/react';
import { StackItemProps } from './types';

export const StackItem = (props: StackItemProps) => {
  const { children, ...otherProps } = props;

  return <ChakraStackItem {...otherProps}>{children}</ChakraStackItem>;
};
