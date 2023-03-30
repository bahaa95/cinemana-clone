import { Person } from '../../types';

export type PersonProps = {
  person: Omit<Person, 'roles'>;
  className?: string;
  style?: React.CSSProperties;
};
