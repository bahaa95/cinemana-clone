import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { TVideoItem } from '../../types';

export type VideoCardProps = Combine<
  {
    video: TVideoItem;
  },
  Omit<BoxProps, 'children'>
>;
