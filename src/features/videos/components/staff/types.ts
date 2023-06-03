import { BoxProps } from 'src/components';
import { Combine } from 'src/types';
import { IPerson } from '../../types';

export type StaffProps = Combine<
  {
    persons: Omit<IPerson, 'roles'>[];
    title: string;
  },
  BoxProps
>;
