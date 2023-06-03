import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { TVideoItem } from '../../types';

export type VideosProps = Combine<
  {
    videos: TVideoItem[];
  },
  Omit<BoxProps, 'children'>
>;
