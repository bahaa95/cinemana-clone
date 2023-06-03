import { Image as ChakraImage } from '@chakra-ui/react';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = (props) => {
  return <ChakraImage {...props} />;
};
