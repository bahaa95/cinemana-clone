import { AsideProps } from './types';

export const Aside: React.FC<AsideProps> = ({ children, ...otherProps }) => {
  return <aside {...otherProps}>{children}</aside>;
};
