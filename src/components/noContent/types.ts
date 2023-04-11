import { BoxProps } from 'src/components';
import { Combine, Copy } from 'src/types';

export type NoContentProps = Copy<
  Combine<
    {
      title?: string;
    },
    Omit<BoxProps, 'children'>
  >
>;
