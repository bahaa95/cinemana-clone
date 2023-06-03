import { MainProps } from './types';

export const Main: React.FC<MainProps> = ({ children, ...otherProps }) => {
  return <main {...otherProps}>{children}</main>;
};
