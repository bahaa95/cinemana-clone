import { WrapItem as ChakraWrapItem } from '@chakra-ui/react';
import { WrapItemProps } from './types';

export const WrapItem: React.FC<WrapItemProps> = ({ children, ...otherProps }) => {
  return <ChakraWrapItem {...otherProps}>{children}</ChakraWrapItem>;
};
