import styles from './SectionTitle.module.scss';
import { SectionTitleProps } from './types';

export const SectionTitle = (props: SectionTitleProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <h2 className={`text-white ${styles.title} ${className || ''}`} {...otherProps}>
      {children}
    </h2>
  );
};
