import { TabList as ChakraTabList } from '@chakra-ui/react';
import { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = ({ children, ...otherProps }) => {
  return <ChakraTabList {...otherProps}>{children}</ChakraTabList>;
};
