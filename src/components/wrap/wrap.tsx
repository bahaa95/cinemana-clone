import { Wrap as ChakraWrap } from '@chakra-ui/react';
import { WrapProps } from './types';

export const Wrap: React.FC<WrapProps> = ({ children, ...otherProps }) => {
  return <ChakraWrap {...otherProps}>{children}</ChakraWrap>;
};
