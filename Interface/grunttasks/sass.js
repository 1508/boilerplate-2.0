module.exports = {
    prototype: {
        sourceMap: true,
        imagePath: '<%= package.prototyperesources %>/images',
        files: {
            '<%= package.prototyperesources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    },
    development: {
        sourceMap: true,
        imagePath: '<%= package.buildresources %>/images',
        files: {
            '<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    },
    production: {
        sourceMap: false,
        outputStyle: 'compressed',
        imagePath: '<%= package.buildresources %>/images',
        files: {
            '<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    }
};
