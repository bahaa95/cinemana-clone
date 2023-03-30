import { WrapItem as ChakraWrapItem } from '@chakra-ui/react';
import { WrapItemProps } from './types';

export const WrapItem = (props: WrapItemProps) => {
  const { children, ...otherProps } = props;

  return <ChakraWrapItem {...otherProps}>{children}</ChakraWrapItem>;
};
