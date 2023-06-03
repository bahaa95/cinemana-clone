import styles from './SectionTitle.module.scss';
import { SectionTitleProps } from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <h2 className={`text-white ${styles.title} ${className || ''}`} {...otherProps}>
      {children}
    </h2>
  );
};
