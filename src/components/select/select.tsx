import { Select as ChakraSelect } from '@chakra-ui/react';
import { SelectProps } from './types';

export const Select = (props: SelectProps) => {
  const { children, className, ...otherProps } = props;

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
