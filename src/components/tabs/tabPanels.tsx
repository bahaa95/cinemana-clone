import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';
import { TabPanelsProps } from './types';

export const TabPanels: React.FC<TabPanelsProps> = ({ children, ...otherProps }) => {
  return <ChakraTabPanels {...otherProps}>{children}</ChakraTabPanels>;
};
