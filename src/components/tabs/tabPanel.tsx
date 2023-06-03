import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';
import { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = ({ children, ...otherProps }) => {
  return <ChakraTabPanel {...otherProps}>{children}</ChakraTabPanel>;
};
