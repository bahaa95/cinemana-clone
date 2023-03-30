import { Person } from '../../types';

export type StaffProps = {
  persons: Omit<Person, 'roles'>[];
  title: string;
  className?: string;
  style?: React.CSSProperties;
};
