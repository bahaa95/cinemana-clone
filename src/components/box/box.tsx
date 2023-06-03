import { Box as BoxComponent } from '@chakra-ui/react';
import { BoxProps } from './types';

export const Box: React.FC<BoxProps> = ({ children, ...otherProps }) => {
  return <BoxComponent {...otherProps}>{children}</BoxComponent>;
};
