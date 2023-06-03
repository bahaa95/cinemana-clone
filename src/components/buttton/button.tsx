import { Button as ChakraButton } from '@chakra-ui/react';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ children, className, ...otherProps }) => {
  return (
    <ChakraButton id={`${styles['button']}`} className={` ${className || ''}`} {...otherProps}>
      {children}
    </ChakraButton>
  );
};
