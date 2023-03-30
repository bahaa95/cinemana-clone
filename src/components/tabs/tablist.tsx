import { TabList as ChakraTabList } from '@chakra-ui/react';
import { TabListProps } from './types';

export const TabList = (props: TabListProps) => {
  const { children, ...otherProps } = props;

  return <ChakraTabList {...otherProps}>{children}</ChakraTabList>;
};
