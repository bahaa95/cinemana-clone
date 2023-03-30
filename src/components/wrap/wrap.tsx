import { Wrap as ChakraWrap } from '@chakra-ui/react';
import { WrapProps } from './types';

export const Wrap = (props: WrapProps) => {
  const { children, ...otherProps } = props;

  return <ChakraWrap {...otherProps}>{children}</ChakraWrap>;
};
