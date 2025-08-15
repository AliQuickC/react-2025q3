/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [new URL('https://media.rawg.io/media/games/**/**')],
  },
};

export default nextConfig;
