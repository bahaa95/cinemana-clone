import { Switch as ChakraSwitch } from '@chakra-ui/react';
import { SwitchProps } from './types';

export const Switch = (props: SwitchProps) => {
  return <ChakraSwitch {...props} />;
};
