import { OuterLinkProps } from './types';

export const OuterLink = (props: OuterLinkProps) => {
  const { children, ...otherProps } = props;
  return <a {...otherProps}>{children}</a>;
};
