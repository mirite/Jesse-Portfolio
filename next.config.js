const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "",
				pathname: "**",
			},
		],
	},
	experimental: { reactCompiler: true },
};

export default nextConfig;
