import { Tabs as ChakraTabs } from '@chakra-ui/react';
import { TabsProps } from './types';

export const Tabs = (props: TabsProps) => {
  const { children, ...otherProps } = props;

  return <ChakraTabs {...otherProps}>{children}</ChakraTabs>;
};
