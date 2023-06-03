import { BoxProps } from 'src/components';
import { Combine } from 'src/types';

export type StarsProps = Combine<
  {
    stars: number | string;
  },
  Omit<BoxProps, 'children'>
>;
