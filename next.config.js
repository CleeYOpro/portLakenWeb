/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid Next's recursive delete hitting OneDrive reparse points.
  cleanDistDir: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "i.redd.it" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "thumbs.dreamstime.com" },
      { protocol: "https", hostname: "thediversitymovement.com" },
      { protocol: "https", hostname: "www.beecreekphoto.com" },
      { protocol: "https", hostname: "wp.bibbeo.com" },
    ],
    domains: ['www.visitportangeles.com', '*'], // Allow all external domains including visitportangeles.com
    unoptimized: true // This allows any external image to be used without optimization
  },
}

module.exports = nextConfig