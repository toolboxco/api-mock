/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {

	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,DELETE,PATCH,POST,PUT<OPTIONS",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "*",
					},
				],
			},
		];
	},
};