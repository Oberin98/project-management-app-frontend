const { join } = require('path');

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
	redirects: () => [
		{
			source: '/',
			destination: '/desctop',
			permanent: true,
		},
	],
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: {
				loader: '@svgr/webpack',
				options: {
					titleProp: true,
					// svgoConfig: {
					// 	plugins: {
					// 		removeViewBox: false,
					// 	},
					// },
				},
			},
		});
		return config;
	},
};
