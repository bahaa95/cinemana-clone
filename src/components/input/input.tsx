import { FieldWrapper } from '../fieldWrapper';
import styles from './Input.module.scss';
import { InputFieldProps } from './types';

export const Input = (props: InputFieldProps) => {
  const { type = 'text', registration, className, label, error, ...otherProps } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        {...registration}
        className={`w-full ${styles.input} ${className || ''}`}
        {...otherProps}
      />
    </FieldWrapper>
  );
};
