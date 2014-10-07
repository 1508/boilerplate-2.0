module.exports = {
	build: {
		files: [{
			expand: true,
			cwd: '<%= package.html %>',
			src: ['*.html'],
			dest: '<%= package.prototype %>',
			ext: '.html',
		}]
	}
}