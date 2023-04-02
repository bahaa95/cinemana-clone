import { AsideProps } from './types';

export const Aside = (props: AsideProps) => {
  const { children, ...otherProps } = props;

  return <aside {...otherProps}>{children}</aside>;
};
