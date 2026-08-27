/**
 * Static export, which is what Cloudflare Pages serves: a directory of files,
 * no adapter and no server. Build command `npm run build`, output directory
 * `out`.
 */
const nextConfig = {
  output: 'export',
  // there is no image optimiser in a static export
  images: {unoptimized: true},
  trailingSlash: true,
};

export default nextConfig;
