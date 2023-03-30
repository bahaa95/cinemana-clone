import { Tab as ChakraTab } from '@chakra-ui/react';
import { TabProps } from './types';

export const Tab = (props: TabProps) => {
  const { children, ...otherProps } = props;

  return <ChakraTab {...otherProps}>{children}</ChakraTab>;
};
