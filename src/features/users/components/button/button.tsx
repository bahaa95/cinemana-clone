import { Button as ButtonComponent, ButtonProps } from 'src/components';
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <ButtonComponent {...otherProps} className={`w-full ${styles.button}`}>
      {children}
    </ButtonComponent>
  );
};
