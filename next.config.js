
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["knex"],
  },
  output: "export",
};

module.exports = nextConfig;
