import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { TVideoItem } from '../../types';

export type VideoListProps = Combine<
  {
    videos: TVideoItem[];
  },
  Omit<BoxProps, 'children'>
>;
