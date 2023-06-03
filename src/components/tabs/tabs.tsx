import { Tabs as ChakraTabs } from '@chakra-ui/react';
import { TabsProps } from './types';

export const Tabs: React.FC<TabsProps> = ({ children, ...otherProps }) => {
  return <ChakraTabs {...otherProps}>{children}</ChakraTabs>;
};
