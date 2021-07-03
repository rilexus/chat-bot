const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = ({port, mode}) => {
	return {
		mode,
		devtool: "inline-source-map",
		devServer: {
			contentBase: "./src",
			disableHostCheck: true,
			historyApiFallback: true,
			https: false,
			index: path.resolve(__dirname, "./src/index.html"),
			inline: true,
			stats: "errors-only",
			open: false,
			overlay: {
				warnings: true,
				errors: true,
			},
			port,
		},
		plugins: [
			new WebpackNotifierPlugin({ title: 'frontend' }),
		]
	}
}
