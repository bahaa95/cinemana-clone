import styles from './FieldWrapper.module.scss';
import { FieldWrapperProps } from './types';

export const FieldWrapper = ({ children, label, error, className }: FieldWrapperProps) => {
  return (
    <div className={`w-full text-base flex flex-col ${styles.fieldWrapper} ${className || ''}`}>
      <label className="text-sm capitalize">
        {label}
        <div className={`${styles.input}`}>{children}</div>
      </label>
      {error?.message && (
        <div className="text-sm text-danger font-medium">
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};
