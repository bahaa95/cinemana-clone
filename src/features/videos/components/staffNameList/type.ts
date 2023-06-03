import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { IPerson } from '../../types';

export type StaffNameListProps = Combine<
  {
    staff: IPerson[];
    title: string;
  },
  Omit<BoxProps, 'children'>
>;
