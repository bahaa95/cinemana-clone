import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapperPassThroughProps } from '../fieldWrapper';

export type InputFieldProps = FieldWrapperPassThroughProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    registration?: Partial<UseFormRegisterReturn>;
  };
