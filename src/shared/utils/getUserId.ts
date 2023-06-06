import { Buffer } from 'buffer';

export const getUserId = (accessToken: string) => {
    const parts = accessToken
    .split('.')
    .map(part =>
      Buffer.from(
        part.replace(/-/g, '+').replace(/_/g, '/'),
        'base64',
      ).toString(),
    );

  const payload = JSON.parse(parts[1]);

  const userId = payload.sub;
  return userId;
  }