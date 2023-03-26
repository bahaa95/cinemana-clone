import { Image as ChakraImage } from '@chakra-ui/react';
import { ImageProps } from './types';

export const Image = (props: ImageProps) => {
  return <ChakraImage {...props} />;
};
