import { AxiosError } from 'axios';

export type AppError = Error & {
  type: 'APP_ERROR';
};

export type ApiError = AxiosError & {
  type: 'API_ERROR';
};

export type TError = AppError | ApiError;
