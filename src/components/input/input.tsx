import { FieldWrapper } from '../fieldWrapper';
import styles from './Input.module.scss';
import { InputFieldProps } from './types';

export const Input: React.FC<InputFieldProps> = ({
  type = 'text',
  registration,
  className,
  label,
  error,
  ...otherProps
}) => {
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
