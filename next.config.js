/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["knex"],
  },
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
