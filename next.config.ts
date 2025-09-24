import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
		images: {
		remotePatterns: [{ hostname: "cdn.sanity.io" }],
	},
};

export default nextConfig;
