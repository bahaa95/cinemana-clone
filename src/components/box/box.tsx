import { Box as BoxComponent } from '@chakra-ui/react';
import { BoxProps } from './types';

export const Box = (props: BoxProps) => {
  const { children, ...otherProps } = props;

  return <BoxComponent {...otherProps}>{children}</BoxComponent>;
};
