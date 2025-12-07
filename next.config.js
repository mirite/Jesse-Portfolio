const nextConfig = {
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
	reactCompiler: true,
};

export default nextConfig;
