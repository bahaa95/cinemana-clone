import { BoxProps } from 'src/components';
import { Combine } from 'src/types';

export type IMDBProps = Combine<
  {
    stars: number | string;
  },
  BoxProps
>;
