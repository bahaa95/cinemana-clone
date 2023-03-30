import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';
import { TabPanelProps } from './types';

export const TabPanel = (props: TabPanelProps) => {
  const { children, ...otherProps } = props;

  return <ChakraTabPanel {...otherProps}>{children}</ChakraTabPanel>;
};
