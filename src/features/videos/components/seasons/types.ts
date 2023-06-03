import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { ISeason } from '../../types';

export type SeasonsProps = Combine<{ seasons: ISeason[] }, Omit<BoxProps, 'children'>>;
