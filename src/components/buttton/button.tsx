import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <button className={`${styles.button} ${className || ''}`} {...otherProps}>
      {children}
    </button>
  );
};
