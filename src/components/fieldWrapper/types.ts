import { FieldError } from 'react-hook-form';
import { Copy } from 'src/types';

export type FieldWrapperProps = {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
  className?: string;
};

export type FieldWrapperPassThroughProps = Copy<Omit<FieldWrapperProps, 'className' | 'children'>>;
