import { Person } from '../../types';

export type StaffNameListProps = {
  staff: Person[];
  title: string;
  className?: string;
  style?: React.CSSProperties;
};
