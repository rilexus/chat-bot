const {config} = require('@chat-bot/webpack-config');

module.exports = (env) => {
	const port = env.port;
	console.log(`Frontend runs on port: ${port}`);
	
	return config(env)
};
