import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';
import { TabPanelsProps } from './types';

export const TabPanels = (props: TabPanelsProps) => {
  const { children, ...otherProps } = props;

  return <ChakraTabPanels {...otherProps}>{children}</ChakraTabPanels>;
};
