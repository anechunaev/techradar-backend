/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// @ts-nocheck
const path = require('path');
const webpack = require('webpack');
const pkg = require('../../package.json');

module.exports = {
	target: "node",
	entry: path.resolve(__dirname, '../../entry/server.tsx'),
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: "server.js",
		chunkFilename: "server.[id].js",
		devtoolModuleFilenameTemplate: "techradar:///[resource-path]",
		devtoolFallbackModuleFilenameTemplate: "techradar:///[resource-path]?[hash]",
		crossOriginLoading: "use-credentials",
		pathinfo: true,
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				loader: "awesome-typescript-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, '../../'),
		],
		extensions: [ '.js', '.jsx', '.ts', '.tsx', ],
	},
	context: path.resolve(__dirname, "../../"),
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.ENV === "production"),
			DEVELOPMENT: JSON.stringify(process.env.ENV === "development"),
			VERSION: JSON.stringify(pkg.version),
		}),
	],
	parallelism: 2,
	profile: true,
	cache: true,
};