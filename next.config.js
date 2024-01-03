/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  images: {
    domains: [
      "res.cloudinary.com"
    ]
  },
}

module.exports = nextConfig
