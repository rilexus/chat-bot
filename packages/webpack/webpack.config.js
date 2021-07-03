const { merge } = require('webpack-merge');

// return webpack config object
const getConfig = (forEnv) => require(`./webpack.config.${forEnv.mode}`)(forEnv);
const getCommonConfig = (env) => require(`./webpack.config.common`)(env);

module.exports = (env) => {
	const port = env.port;
	console.log(`Frontend runs on port: ${port}`);
	
	return merge(
		getCommonConfig(env),
		getConfig(env),
	)
};
