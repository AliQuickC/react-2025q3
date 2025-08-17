import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  distDir: './dist',
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [new URL('https://media.rawg.io/media/games/**/**')],
  },
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

export default withNextIntl(nextConfig);
