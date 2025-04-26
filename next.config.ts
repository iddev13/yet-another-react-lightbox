import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.yet-another-react-lightbox.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'commondatastorage.googleapis.com',
				port: '',
			},
			// {
			//   protocol: 'https',
			//   hostname: 'img.clerk.com',
			//   port: '',
			//   pathname: '/account123/**',
			//   search: '',
			// },
		],
	},
};

export default nextConfig;
