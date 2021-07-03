const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
	return {
		entry: {
			"app": ['./src/index.tsx']
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			new CopyWebpackPlugin({
				// Copies individual files or entire directories, which already exist, to the build directory.
				// https://www.npmjs.com/package/copy-webpack-plugin
				patterns: [
					// to: is relative to dist/
					// { from: "src/assets", to: "assets" },
					{ from: "src/index.html", to: "." },
				],
			}),
		],
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist'),
		},
	};
}
