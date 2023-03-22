export type Auth = {
  authenticated: boolean;
  username: string;
  email: string;
  accessToken: string;
};

export type RefreshTokenResponse = Omit<Auth, 'authenticated'>;
