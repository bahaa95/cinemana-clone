import { AxiosError } from 'axios';
import { UseQueryOptions, UseMutationOptions } from 'react-query';
import { ExtractFnReturnType } from '@/types/index';

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>, unknown, ExtractFnReturnType<QueryFnType>, any>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
