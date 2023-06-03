import { OuterLinkProps } from './types';

export const OuterLink: React.FC<OuterLinkProps> = ({ children, ...otherProps }) => {
  return <a {...otherProps}>{children}</a>;
};
