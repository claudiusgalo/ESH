/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  theme: {
    extend: {
      borderWidth: {
        '40': '40px',
      },
    },
  },
  images: {
    domains: ['photos.zillowstatic.com'],
  },
};

module.exports = nextConfig;
