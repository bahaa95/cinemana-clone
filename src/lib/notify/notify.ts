import { toast, ToastOptions } from 'react-toastify';

type Notification = {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  options?: ToastOptions;
};

export function notify({ type, message, options }: Notification): void {
  toast[type || 'info'](message, options);
}
