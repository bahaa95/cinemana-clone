import { ENV } from 'src/config/index';

export function isDevelopment(): boolean {
  return ENV === 'development';
}
