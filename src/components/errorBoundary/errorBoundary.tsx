import { Component, ReactNode } from 'react';
import { ApiError } from './ApiError';
import { AppError } from './AppError';
import { TError } from './types';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: TError;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_error: any): State {
    let error: TError;

    if (_error.name === 'AxiosError') {
      error = {
        type: 'API_ERROR',
        ..._error,
      };
    } else {
      error = {
        type: 'APP_ERROR',
        ..._error,
      };
    }

    return { hasError: true, error };
  }

  public componentDidCatch() {}

  public render() {
    if (this.state.hasError) {
      //when error occurs in the app (not api error)
      if (this.state.error?.type === 'APP_ERROR') {
        return (
          <>
            <AppError />
          </>
        );
      }

      //when error occurs in the api
      if (this.state.error?.type === 'API_ERROR') {
        return (
          <>
            <ApiError
              status={this.state.error.response?.status}
              statusText={this.state.error.response?.statusText}
              message={this.state.error.message}
            />
          </>
        );
      }
    }

    return this.props.children;
  }
}
