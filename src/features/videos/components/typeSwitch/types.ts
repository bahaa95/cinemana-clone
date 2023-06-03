import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { IVideo } from '../../types';

export type TypeSwitchProps = Combine<
  {
    onChange: (type: IVideo['type']) => void;
    defaultType?: IVideo['type'];
  },
  Omit<BoxProps, 'children'>
>;
