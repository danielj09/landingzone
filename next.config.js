// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
  basePath: isProd ? "/landingzone" : "", // Use your GitHub repo name here
  assetPrefix: isProd ? "/landingzone/" : "", // Ensures assets load correctly
};

module.exports = nextConfig;
