module.exports = {
	build: {
		options: {
			port: 1508,
			hostname: "0.0.0.0",
			bases: ['<%= package.build %>']
		}
	}
};