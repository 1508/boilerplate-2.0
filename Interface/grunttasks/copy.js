module.exports = {
	development: {
		files: [{
			//Fonts
			expand: true,
			cwd: '<%= package.resources %>/',
			src: 'fonts/*',
			dest: '<%= package.build %>/fonts'
		}, {
			//Javascript
			expand: true,
			cwd: '<%= package.resources %>/js/',
			src: ['standalone/*.js'],
			dest: '<%= package.build %>/js'
		}]
	},
	js: {
		files: [{
			//Javascript
			expand: true,
			cwd: '<%= package.resources %>/js/',
			src: ['*.js'],
			dest: '<%= package.prototype %>/js'
		}]
	},
	images: {
		files: [{
			//Images
			expand: true,
			cwd: '<%= package.resources %>/images/',
			src: ['*.{png,jpg,gif}'],
			dest: '<%= package.prototype %>/images'
		}]
	},
	fonts: {
		files: [{
			//Fonts
			expand: true,
			cwd: '<%= package.resources %>/fonts/',
			src: '**',
			dest: '<%= package.prototype %>/fonts'
		}]
	}

};