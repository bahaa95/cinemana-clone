import { ENV } from '@/config/index';

export function isDevelopment(): boolean {
  return ENV === 'development';
}
