import { UseFormRegisterReturn } from 'react-hook-form';
import { Copy } from 'src/types';
import { FieldWrapperPassThroughProps } from '../fieldWrapper';

export type InputFieldProps = Copy<
  FieldWrapperPassThroughProps &
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
      registration?: Partial<UseFormRegisterReturn>;
    }
>;
