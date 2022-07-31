/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "noelarzola.com",
      "cdn0.iconfinder.com",
      "1000logos.net",
    ],
  },
};
