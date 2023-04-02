import { HeaderProps } from './types';

export const Header = (props: HeaderProps) => {
  const { children, ...otherProps } = props;

  return <header {...otherProps}>{children}</header>;
};
