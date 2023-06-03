import { Tab as ChakraTab } from '@chakra-ui/react';
import { TabProps } from './types';

export const Tab: React.FC<TabProps> = ({ children, ...otherProps }) => {
  return <ChakraTab {...otherProps}>{children}</ChakraTab>;
};
