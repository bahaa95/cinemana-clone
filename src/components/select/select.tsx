import { Select as ChakraSelect } from '@chakra-ui/react';
import { SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({ children, className, ...otherProps }) => {
  return (
    <ChakraSelect
      className={`text-gray ${className || ''}`}
      border={'none'}
      borderRadius={'2em'}
      background={'#061520'}
      {...otherProps}
    >
      {children}
    </ChakraSelect>
  );
};
