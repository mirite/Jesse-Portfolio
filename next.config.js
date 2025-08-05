const nextConfig = {
	experimental: { reactCompiler: true },
	images: {
		remotePatterns: [
			{
				hostname: "images.ctfassets.net",
				pathname: "**",
				port: "",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
