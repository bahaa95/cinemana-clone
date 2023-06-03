import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ children, ...otherProps }) => {
  return <header {...otherProps}>{children}</header>;
};
