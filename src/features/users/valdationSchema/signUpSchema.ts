import zod, { TypeOf } from 'zod';
import { user } from './userSchema';

export const signUpSchema = zod
  .object({ ...user, confirmPassword: user.password })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ['confirmPassword'],
  });

export type SignUpSchema = TypeOf<typeof signUpSchema>;
