/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid Next's recursive delete hitting OneDrive reparse points.
  cleanDistDir: false,
}

module.exports = nextConfig
