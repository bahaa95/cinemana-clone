import { Button as ChakraButton } from '@chakra-ui/react';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <ChakraButton id={`${styles['button']}`} className={` ${className || ''}`} {...otherProps}>
      {children}
    </ChakraButton>
  );
};
