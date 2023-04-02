import { NavProps } from './types';

export const Nav = (props: NavProps) => {
  const { children, ...otherProps } = props;

  return <nav {...otherProps}>{children}</nav>;
};
