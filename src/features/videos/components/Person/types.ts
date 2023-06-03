import { IPerson } from '../../types';

export type PersonProps = {
  person: Omit<IPerson, 'roles'>;
  className?: string;
  style?: React.CSSProperties;
};
