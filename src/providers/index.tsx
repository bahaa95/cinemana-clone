import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader, ErrorBoundary } from 'src/components';
import { AuthProvider } from 'src/lib/auth';
import { toastifyProps } from 'src/lib/notify';
import { queryClient } from 'src/lib/react-query';
import { isDevelopment } from 'src/utils/isDevelopment';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <AuthProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <>
                <ChakraProvider>
                  {children}
                  {isDevelopment() ? (
                    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
                  ) : null}
                </ChakraProvider>
              </>
            </QueryClientProvider>
          </ErrorBoundary>
        </BrowserRouter>
        <ToastContainer {...toastifyProps} />
      </AuthProvider>
    </Suspense>
  );
};
