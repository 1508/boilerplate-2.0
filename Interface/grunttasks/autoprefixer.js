module.exports = {
    options: {
      browsers: ['last 2 versions', 'ie 10']
    },
    prototype: {
		src: '<%= package.prototyperesources %>/css/styles.css' // globbing is also possible here
    },
  }