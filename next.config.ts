import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Silence Sass deprecation warnings from node_modules (e.g., Bootstrap's internal @import)
    // and keep output clean while still surfacing issues in your own styles.
    sassOptions: {
        quietDeps: true,
        // Also silence specific Sass deprecations that are known noise in dependencies.
        // Safe because we aren't relying on legacy JS API nor @import in our own code.
        // See: https://sass-lang.com/d/import
        silenceDeprecations: ["legacy-js-api", "import"],
    },
	images: {
		// Allow images hosted on Cloudinary
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
