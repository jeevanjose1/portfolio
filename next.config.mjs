/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/image-url', '@portabletext/editor'],
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
