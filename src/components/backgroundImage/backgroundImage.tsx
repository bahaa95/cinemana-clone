import React from 'react';
import { Image } from '..';
import { BackgroundImageProps } from './types';

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`absolute top bottom right left ${className || ''} `}
      {...props}
    />
  );
};
