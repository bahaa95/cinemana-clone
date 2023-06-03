import { NavProps } from './types';

export const Nav: React.FC<NavProps> = ({ children, ...otherProps }) => {
  return <nav {...otherProps}>{children}</nav>;
};
