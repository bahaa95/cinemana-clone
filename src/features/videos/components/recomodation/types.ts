import { BoxProps } from 'src/components';
import { Copy, Combine } from 'src/types';
import { VideoItem } from '../../types';

export type RecomodationProps = Copy<Combine<{ videos: VideoItem[] }, BoxProps>>;
