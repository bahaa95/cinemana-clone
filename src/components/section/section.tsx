import { SectionProps } from './types';

export const Section: React.FC<SectionProps> = ({ children, ...otherProps }) => {
  return <section {...otherProps}>{children}</section>;
};
