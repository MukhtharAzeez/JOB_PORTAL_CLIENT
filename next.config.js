/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "1.bp.blogspot.com",
      "img.freepik.com",
      "thumbs.dreamstime.com",
      "myawsbucketforaddpost.s3.ap-south-1.amazonaws.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
