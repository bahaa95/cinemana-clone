import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { TSpecialVideo } from '../../types';

export type SpecialVideosProps = Combine<
  {
    specialVideos: TSpecialVideo[];
  },
  BoxProps
>;
