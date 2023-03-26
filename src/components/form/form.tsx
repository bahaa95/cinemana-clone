import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

type FormProps<FormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<FormValues>;
  children: (methods: UseFormReturn<FormValues>) => React.ReactNode;
  options?: UseFormProps<FormValues>;
  className?: string;
  id?: string;
  schema?: Schema;
};

export const Form = <
  FormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  className,
  id,
  schema,
}: FormProps<FormValues, Schema>) => {
  const methods = useForm<FormValues>({ ...options, resolver: schema && zodResolver(schema) });

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={`flex flex-col ${className || ''}`}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
