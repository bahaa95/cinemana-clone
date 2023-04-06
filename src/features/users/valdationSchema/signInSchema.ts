import zod, { TypeOf } from 'zod';
import { user } from './userSchema';

export const signInSchema = zod.object({ email: user.email, password: user.password });
export type SignInSchema = TypeOf<typeof signInSchema>;
