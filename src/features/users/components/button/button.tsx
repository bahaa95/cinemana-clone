import { Button as ButtonComponent } from 'src/components';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return (
    <ButtonComponent {...otherProps} className={`w-full ${styles.button}`}>
      {children}
    </ButtonComponent>
  );
};
